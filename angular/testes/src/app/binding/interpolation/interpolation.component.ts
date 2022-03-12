import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public saudacao: string = "oie";
  public mensagem: string = "interpolation works!";

  public nome: string = "Marco";
  public idade: number = 19;
  public idadeComp: number = 15;

}
