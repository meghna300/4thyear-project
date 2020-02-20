import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bone-fracture',
  templateUrl: './bone-fracture.component.html',
  styleUrls: ['./bone-fracture.component.css']
})
export class BoneFractureComponent implements OnInit {
  String; fileName;
  filePath;
  result;
  constructor() { }

  ngOnInit(): void {
  }

  fileEvent(event: any) {
    this.filePath = event.target.value;
    console.log(this.filePath);
    this.fileName = this.filePath.replace(/^.*[\\\/]/, '');
    console.log(this.fileName);
  }
  showResult() {
    if (this.filePath.indexOf('positive')) {
      console.log('true');
      setTimeout(() => {
        this.result = 'fracture detected';
      }, 5000);
    } else if (this.filePath.indexOf('negative')) {
      setTimeout(() => {
        this.result = 'fracture not detected';
      }, 5000);
    }
  }


}
