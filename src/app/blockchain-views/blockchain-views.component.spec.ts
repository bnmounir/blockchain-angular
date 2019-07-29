import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainViewsComponent } from './blockchain-views.component';

describe('BlockchainViewsComponent', () => {
  let component: BlockchainViewsComponent;
  let fixture: ComponentFixture<BlockchainViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockchainViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
