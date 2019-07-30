import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block-view',
  templateUrl: './block-view.component.html',
  styleUrls: ['./block-view.component.scss']
})
export class BlockViewComponent implements OnInit {
  @Input() public block;
  public isClicked: boolean = false;

  constructor() {
    setTimeout(() => {
      console.log('from block-view component => ', this.block);
    }, 2000);
  }

  handleClick() {
    this.isClicked = !this.isClicked;
  }

  ngOnInit() {}
}
