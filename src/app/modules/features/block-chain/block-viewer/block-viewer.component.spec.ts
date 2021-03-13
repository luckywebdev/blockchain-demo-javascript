import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockViewerComponent } from './block-viewer.component';

describe('BlockViewerComponent', () => {
  let component: BlockViewerComponent;
  let fixture: ComponentFixture<BlockViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
