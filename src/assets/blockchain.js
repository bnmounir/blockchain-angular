const SHA256 = require('crypto-js/sha256');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

class Data {
  constructor(fromAddress, toAddress, amount) {
    (this.fromAddress = fromAddress),
      (this.toAddress = toAddress),
      (this.amount = amount);
    this.timestamp = Date.now();
  }
  calculateHash() {
    return SHA256(this.fromAddress + this.toAddress + this.amount).toString();
  }
  signData(signingKey) {
    if (signingKey.getPublic('hex') !== this.fromAddress) {
      throw new Error('forbidden');
    }
    const hashDATA = this.calculateHash();
    const sig = signingKey.sign(hashDATA, 'base64');
    this.signature = sig.toDER('hex');
  }

  isValid() {
    if (this.fromAddress === null) return true;
    if (!this.signature || this.signature.length === 0) {
      throw new Error('no signature');
    }
    const publicKey = ec.keyFromPublic(this.fromAddress, 'hex');
    return publicKey.verify(this.calculateHash(), this.signature);
  }
}

class Block {
  constructor(timestamp, data, previousHash = '') {
    (this.timestamp = timestamp),
      (this.data = data),
      (this.previousHash = previousHash),
      (this.hash = this.calculateHash()),
      (this.nonce = 0);
  }
  calculateHash() {
    return SHA256(
      this.previousHash +
        this.timestamp +
        JSON.stringify(this.data) +
        this.nonce
    ).toString();
  }
  mineBlock(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')
    ) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    console.log('Block Mined: ' + this.hash);
  }

  hasValidData() {
    for (const dt of this.data) {
      if (!dt.isValid()) {
        return false;
      }
    }
    return true;
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 4;
    this.pendingData = [];
    this.miningReward = 100;
  }

  createGenesisBlock() {
    return new Block(Date.now(), [], '0');
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  minePendingData(mineRewardAddress) {
    const rewardData = new Data(null, mineRewardAddress, this.miningReward);
    this.pendingData.push(rewardData);

    let block = new Block(
      Date.now(),
      this.pendingData,
      this.getLatestBlock().hash
    );
    block.mineBlock(this.difficulty);

    // console.log('Block successfully mined!');
    this.chain.push(block);

    this.pendingData = [];
  }

  addData(data) {
    if (!data.fromAddress || !data.toAddress) {
      throw new Error('Data must include from to address');
    }
    if (!data.isValid()) {
      throw new Error('invalid block');
    }
    if (data.amount <= 0) {
      throw new Error('amount should be higher than 0');
    }

    this.pendingData.push(data);
  }

  getBalanceOfAddress(address) {
    let balance = 0;

    for (const block of this.chain) {
      for (const dt of block.data) {
        if (dt.fromAddress === address) {
          balance -= dt.amount;
        }
        if (dt.toAddress === address) {
          balance += dt.amount;
        }
      }
    }
    return balance;
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (!currentBlock.hasValidData()) {
        return false;
      }

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }
      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
      return true;
    }
  }
}

module.exports.Blockchain = Blockchain;
module.exports.Block = Block;
module.exports.Data = Data;
