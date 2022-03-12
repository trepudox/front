import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public position: {x: number, y: number} = {x: 0, y: 0};

  public alerta(msg: string, event: MouseEvent): void {
    alert(msg + " event logado no console");
    console.log(event);
    console.log((event.target as HTMLButtonElement).textContent);
  }

  public displayPosition(event: MouseEvent): void {
    this.position.x = event.offsetX;
    this.position.y = event.offsetY;
  }

}
