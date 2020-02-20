import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainTumorComponent } from './brain-tumor.component';

describe('BrainTumorComponent', () => {
  let component: BrainTumorComponent;
  let fixture: ComponentFixture<BrainTumorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrainTumorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrainTumorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
