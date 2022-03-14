import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  public listItems: { nome: string, idade: number }[] = [
    { nome: 'Marco', idade: 19 },
    { nome: 'Anna', idade: 18 },
    { nome: 'Nicole', idade: 20 }
  ];
  
  public inputNome: string;
  public inputIdade: number;
  public inputIndex: number;

  constructor() { }

  ngOnInit(): void {
  }

  public add(nome: string, idade: number): void {
    this.listItems.push({ nome: nome, idade: idade });
  }

  public remove(index: number): void {
    if(index >= this.listItems.length) {
      alert("Index out of bounds");
      return;
    }

    this.listItems.splice(index, 1);
  }

}
