import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoneFractureComponent } from './bone-fracture/bone-fracture.component';
import { BrainTumorComponent } from './brain-tumor/brain-tumor.component';
import { DiseaseAnalysisComponent } from './disease-analysis/disease-analysis.component';
import { NearbyComponent } from './nearby/nearby.component';


const routes: Routes = [
  {
    path: '', component: BoneFractureComponent
  },
  {
    path: 'brain-tumor', component: BrainTumorComponent
  },
  {
    path: 'disease-prediction', component: DiseaseAnalysisComponent
  },
  {
    path: 'nearby', component: NearbyComponent
  },
  {
    path: 'bone-fracture', component: BoneFractureComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
