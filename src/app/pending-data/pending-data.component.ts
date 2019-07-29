import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../services/blockchain.service';

@Component({
  selector: 'app-pending-data',
  templateUrl: './pending-data.component.html',
  styleUrls: ['./pending-data.component.scss']
})
export class PendingDataComponent implements OnInit {
  public pendingData = [];

  constructor(private blockchainService: BlockchainService) {
    this.pendingData = blockchainService.getPendingData();
  }

  ngOnInit() {}

  minePendingData() {
    this.blockchainService.minePendingData();
  }
}
