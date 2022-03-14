import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  public timeCondition: boolean = true;
  public buttonCondition: boolean = true;

  constructor() { }

  ngOnInit(): void {
    setInterval(()=> {
      if(this.timeCondition) {
        this.timeCondition = false;
      } else {
        this.timeCondition = true;
      }
    }, 2500);
  }

  public changeButtonCondition(): void {
    if(this.buttonCondition) {
      this.buttonCondition = false;
    } else {
      this.buttonCondition = true;
    }
  }

}
