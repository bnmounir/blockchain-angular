import { Component, OnInit, Input } from '@angular/core';
import { BlockchainService } from '../services/blockchain.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() public metadata: [] = [];

  constructor(public blockchainService: BlockchainService) {}

  ngOnInit() {
    setTimeout(() => {
      console.log('metadata from data-table component => ', this.metadata);
    }, 2000);
  }
}
