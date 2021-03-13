import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockChainComponent } from './block-chain.component';

describe('BlockChainComponent', () => {
  let component: BlockChainComponent;
  let fixture: ComponentFixture<BlockChainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockChainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
