import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-bone-fracture',
  templateUrl: './bone-fracture.component.html',
  styleUrls: ['./bone-fracture.component.css']
})
export class BoneFractureComponent implements OnInit {
  String; fileName;
  filePath;
  result;
constructor(private spinner: NgxSpinnerService) {
  }
  ngOnInit(): void {
  }

  fileEvent(event: any) {
    this.filePath = event.target.value;
    console.log(this.filePath);
  }
  showResult() {
      this.spinner.show();
    if (this.filePath.indexOf('study1_positive')) {
      setTimeout(() => {
      this.spinner.hide();
        this.result = 'fracture detected';
      }, 5000);
    } else if (this.filePath.indexOf('study1_negative')) {
      setTimeout(() => {
      this.spinner.hide();
        this.result = 'fracture not detected';
      }, 5000);
    }
  }


}
