import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoneFractureComponent } from './bone-fracture/bone-fracture.component';
import { BrainTumorComponent } from './brain-tumor/brain-tumor.component';
import { BloodReportComponent } from './blood-report/blood-report.component';
import { NearbyComponent } from './nearby/nearby.component';


const routes: Routes = [
  {
    path: '', component: BoneFractureComponent
  },
  {
    path: 'brain-tumor', component: BrainTumorComponent
  },
  {
    path: 'blood-report', component: BloodReportComponent
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
