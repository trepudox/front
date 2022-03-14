import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  public n: number = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(()=> {
      if(this.n == 7) {
        this.n = 0;
        return;
      }
      
      this.n += 1;
    }, 2500);
  }

}
