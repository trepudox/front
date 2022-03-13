import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  private colorList: string[] = ["blue", "green", "red", "black", "chartreuse", "brown", "yellow", "pink", "white"];
  private backgroundList: string[] = ["pink", "brown", "red", "blue", "yellow", "green", "white", "chartreuse", "black"];

  private countTexto: number = 0;
  private countBackground: number = 0;

  public tsStyle: string = "color: white; background: black;";

  public trocaCorTexto(): void {
    if(this.countTexto == 0) {
      this.tsStyle = this.tsStyle.replace(`color: white;`, `color: ${this.colorList[0]};`);
    } else {
      this.tsStyle = this.tsStyle.replace(`color: ${this.colorList[this.countTexto - 1]};`, `color: ${this.colorList[this.countTexto]};`);
    }

    this.countTexto += 1;
    if(this.countTexto >= this.colorList.length) {
      this.countTexto = 0;
    }
  }

  public trocaCorBackground(): void {
    if(this.countBackground == 0) {
      this.tsStyle = this.tsStyle.replace(`background: black;`, `background: ${this.backgroundList[0]};`);
    } else {
      this.tsStyle = this.tsStyle.replace(`background: ${this.backgroundList[this.countBackground - 1]};`, `background: ${this.backgroundList[this.countBackground]};`);
    }

    this.countBackground += 1;
    if(this.countBackground >= this.backgroundList.length) {
      this.countBackground = 0;
    }
  }

  public disabled: boolean = false;

  public disableDireita(): void {
    if(this.disabled) {
      this.disabled = false;
    } else {
      this.disabled = true;
    }
  }

}
