import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  isHidden1: boolean = true;
  isHidden2: boolean = true;
  isHidden3: boolean = true;
  isHidden4: boolean = true;
  isHidden5: boolean = true;
  isHidden6: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  showQuestions1() {
    this.isHidden1 = false;
  }
  showQuestions2() {
    this.isHidden2 = false;
  }
  showQuestions3() {
    this.isHidden3 = false;
  }
  showQuestions4() {
    this.isHidden4 = false;
  }
  showQuestions5() {
    this.isHidden5 = false;
  }

  showAlert() {
    alert("Well...that's too bad. See ya!");
  }

  showContinueButton() {
    this.isHidden6 = false;
  }

}

