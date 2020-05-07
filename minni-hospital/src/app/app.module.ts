import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileSelectDirective, FileUploadModule } from 'ng2-file-upload';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoneFractureComponent } from './bone-fracture/bone-fracture.component';
import { BrainTumorComponent } from './brain-tumor/brain-tumor.component';
import { DiseaseAnalysisComponent } from './disease-analysis/disease-analysis.component';
import { NearbyComponent } from './nearby/nearby.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BoneFractureComponent,
    BrainTumorComponent,
    DiseaseAnalysisComponent,
    NearbyComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    NgxSpinnerModule,
    FileUploadModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
