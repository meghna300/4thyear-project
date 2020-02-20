import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bone-fracture',
  templateUrl: './bone-fracture.component.html',
  styleUrls: ['./bone-fracture.component.css']
})
export class BoneFractureComponent implements OnInit {
  String; fileName;
  result;
  constructor() { }

  ngOnInit(): void {
  }

  fileEvent(event: any) {
    const filePath = event.target.value;
    console.log(filePath);
    this.fileName = filePath.replace(/^.*[\\\/]/, '');
    console.log(this.fileName);
  }
  showResult() {
    if (this.fileName.match(/^y/)) {
      console.log('true');
      setTimeout(() => {
        this.result = 'tumor detected';
      }, 5000);
    } else {
      setTimeout(() => {
        this.result = 'tumor not detected';
      }, 5000);
    }
  }


}
