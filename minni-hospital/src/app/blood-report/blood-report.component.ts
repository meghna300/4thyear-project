import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-blood-report',
  templateUrl: './blood-report.component.html',
  styleUrls: ['./blood-report.component.css']
})
export class BloodReportComponent implements OnInit {
  @ViewChild('Id') Id: any;
  symptomID: any;
  url = 'https://api-mini-hospital.herokuapp.com/api/disease';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.symptomID = this.Id.nativeElement.value;
    this.http.post(this.url, this.symptomID)
      .subscribe(response => {
        console.log(response);
      }, (err: HttpErrorResponse) => {
        console.log(err);
      });
  }

}
