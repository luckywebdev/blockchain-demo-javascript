import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingTransactionComponent } from './pending-transaction.component';

describe('PendingTransactionComponent', () => {
  let component: PendingTransactionComponent;
  let fixture: ComponentFixture<PendingTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
