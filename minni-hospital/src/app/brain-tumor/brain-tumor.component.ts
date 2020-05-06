import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { FileUploader } from 'ng2-file-upload';
import { AppConstants } from '../Constants/routes';

const URL = AppConstants.baseURL + '/api/brain';
@Component({
  selector: 'app-brain-tumor',
  templateUrl: './brain-tumor.component.html',
  styleUrls: ['./brain-tumor.component.css']
})
export class BrainTumorComponent implements OnInit {
  String; fileName;
  result;
  isLoading = false;
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });

  constructor(private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    // override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    // overide the onCompleteItem property of the uploader so we are
    // able to deal with the server response.
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.isLoading = false;
      console.log('ImageUpload:uploaded:', item, status, response);
      console.log(JSON.parse(response)[3]);
      this.result = JSON.parse(response)[3];
    };
  }
  loader() {
    this.isLoading = true;
  }
  // fileEvent(event: any) {
  //   const filePath = event.target.value;
  //   this.fileName = filePath.replace(/^.*[\\\/]/, '');
  // }
  // showResult() {
  //   this.spinner.show();
  //   if (this.fileName.match(/^Y/)) {
  //     setTimeout(() => {
  //       this.spinner.hide();
  //       this.result = 'tumor detected';
  //     }, 5000);
  //   } else {
  //     setTimeout(() => {
  //       this.spinner.hide();
  //       this.result = 'tumor not detected';
  //     }, 5000);
  //   }
  // }
}
