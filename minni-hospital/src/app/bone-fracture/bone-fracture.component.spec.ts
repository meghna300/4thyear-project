import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoneFractureComponent } from './bone-fracture.component';

describe('BoneFractureComponent', () => {
  let component: BoneFractureComponent;
  let fixture: ComponentFixture<BoneFractureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoneFractureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoneFractureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
