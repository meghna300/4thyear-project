import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-brain-tumor',
  templateUrl: './brain-tumor.component.html',
  styleUrls: ['./brain-tumor.component.css']
})
export class BrainTumorComponent implements OnInit {
  String; fileName;
  result;
  constructor(private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
  }
  fileEvent(event: any) {
    const filePath = event.target.value;
    this.fileName = filePath.replace(/^.*[\\\/]/, '');
  }
  showResult() {
    this.spinner.show();
    if (this.fileName.match(/^Y/)) {
      setTimeout(() => {
        this.spinner.hide();
        this.result = 'tumor detected';
      }, 5000);
    } else {
      setTimeout(() => {
        this.spinner.hide();
        this.result = 'tumor not detected';
      }, 5000);
    }
  }
}
