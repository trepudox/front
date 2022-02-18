import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.css']
})
export class SomaComponent implements OnInit {

  public number1: number = 1.5;
  public number2: number = 5;
  
  public str: string = (this.number1 + this.number2).toString();
  
  constructor() { }

  ngOnInit(): void {
  }

}
