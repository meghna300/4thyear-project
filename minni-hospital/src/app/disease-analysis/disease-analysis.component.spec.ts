import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseaseAnalysisComponent } from './disease-analysis.component';

describe('BloodReportComponent', () => {
  let component: DiseaseAnalysisComponent;
  let fixture: ComponentFixture<DiseaseAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiseaseAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseaseAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
