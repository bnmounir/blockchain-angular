import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../services/blockchain.service';

@Component({
  selector: 'app-blockchain-views',
  templateUrl: './blockchain-views.component.html',
  styleUrls: ['./blockchain-views.component.scss']
})
export class BlockchainViewsComponent implements OnInit {
  public blocks = [];
  public selectedBlock = null;

  constructor(public blockchainService: BlockchainService) {
    this.blocks = blockchainService.getBlocks();
    this.selectedBlock = this.blocks[0];
  }

  ngOnInit() {}

  showData(block) {
    this.selectedBlock = block;
  }
}
