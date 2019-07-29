import { Injectable } from '@angular/core';
import { Blockchain } from '../../assets/blockchain.js';
import { ec as EC } from 'elliptic';
@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  public blockchainInstance = new Blockchain();
  public walletKeys = [];

  constructor() {
    this.blockchainInstance.difficulty = 1;
    this.blockchainInstance.minePendingData('my-wallet-address');

    this.generateWalletKeys();
  }

  getBlocks() {
    return this.blockchainInstance.chain;
  }

  addData(dt) {
    this.blockchainInstance.addData(dt);
  }

  getPendingData() {
    return this.blockchainInstance.pendingData;
  }

  minePendingData() {
    this.blockchainInstance.minePendingData(this.walletKeys[0].publicKey);
  }

  private generateWalletKeys() {
    const ec = new EC('secp256k1');
    const key = ec.genKeyPair();

    this.walletKeys.push({
      keyObj: key,
      publicKey: key.getPublic('hex'),
      privateKey: key.getPrivate('hex')
    });
  }
}
