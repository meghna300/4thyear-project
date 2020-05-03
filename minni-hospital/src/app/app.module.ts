import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileSelectDirective, FileUploadModule } from 'ng2-file-upload';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoneFractureComponent } from './bone-fracture/bone-fracture.component';
import { BrainTumorComponent } from './brain-tumor/brain-tumor.component';
import { BloodReportComponent } from './blood-report/blood-report.component';
import { NearbyComponent } from './nearby/nearby.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    BoneFractureComponent,
    BrainTumorComponent,
    BloodReportComponent,
    NearbyComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    NgxSpinnerModule,
    FileUploadModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDDkQTBSz8E4vr8wRYu88Tmdb0jdX2B_8E',
      libraries: ['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
