import { Component, OnInit } from '@angular/core';
// import { NgxSpinnerService } from 'ngx-spinner';
import { FileUploader } from 'ng2-file-upload';

const URL = 'https://api-mini-hospital.herokuapp.com/api/bone';
@Component({
  selector: 'app-bone-fracture',
  templateUrl: './bone-fracture.component.html',
  styleUrls: ['./bone-fracture.component.css']
})
export class BoneFractureComponent implements OnInit {
  String; fileName;
  filePath;
  result;
  isLoading = false;
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });
  constructor() {
  }
  ngOnInit(): void {
    // override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    // overide the onCompleteItem property of the uploader so we are
    // able to deal with the server response.
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.isLoading = false;
      console.log('ImageUpload:uploaded:', item, status, response);
      console.log(JSON.parse(response)[5]);
      this.result  = JSON.parse(response)[5];
    };
  }
  loader() {
    this.isLoading = true;
  }
  // fileEvent(event: any) {
  //   this.filePath = event.target.value;
  //   console.log(this.filePath);
  // }
  // showResult() {
  //     this.spinner.show();
  //     if (this.filePath.indexOf('study1_positive')) {
  //     setTimeout(() => {
  //     this.spinner.hide();
  //     this.result = 'fracture detected';
  //     }, 5000);
  //   } else if (this.filePath.indexOf('study1_negative')) {
  //     setTimeout(() => {
  //     this.spinner.hide();
  //     this.result = 'fracture not detected';
  //     }, 5000);
  //   }
  // }


}
