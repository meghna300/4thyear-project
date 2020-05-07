import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AppConstants } from '../Constants/routes';

@Component({
  selector: 'app-disease-analysis',
  templateUrl: './disease-analysis.component.html',
  styleUrls: ['./disease-analysis.component.css']
})
export class DiseaseAnalysisComponent implements OnInit {
  @ViewChild('Id') Id: any;
  result: String;
  selectedValue: String;
  symptompArray;
  url = AppConstants.baseURL + '/api/disease';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.selectedValue = this.Id.nativeElement.value;
    this.symptompArray = this.selectedValue.split(' ').map(ele => parseInt(ele));
    this.http.post(this.url, { "symptopms": this.symptompArray })
      .subscribe(response => {
        this.result = response[2].split("'")[1]
      }, (err: HttpErrorResponse) => {
        console.log(err);
      });
  }

}
