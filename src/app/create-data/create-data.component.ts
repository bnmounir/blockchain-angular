import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../services/blockchain.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.scss']
})
export class CreateDataComponent implements OnInit {
  public newDt;
  public walletKey;

  constructor(
    private blockchainService: BlockchainService,
    private dataService: DataService
  ) {
    this.walletKey = blockchainService.walletKeys[0];
    this.newDt = dataService.dataInstance;
  }

  ngOnInit() {}

  createData() {
    this.newDt.fromAddress = this.walletKey.publicKey;
    this.newDt.signData(this.walletKey.keyObj);
    this.blockchainService.addData(this.newDt);
    this.newDt = this.dataService.dataInstance;
    console.log('from create data component: New data ===> ', this.newDt);
    console.log('from create data component: Wallet key ===> ', this.walletKey);
  }
}
