import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  public inputText: string = "";

  constructor() { }

  ngAfterViewInit(): void {
  }
  
  ngOnInit(): void {
  }

  public pesquisar(text: string, e: Event): void {
    if(e.type == 'click') {
      this.inputText = "";
      console.log("pesquisou: " + text);
    } else {
      let keyboardEvent: KeyboardEvent = e as KeyboardEvent;

      if(keyboardEvent.code == 'Enter') {
        this.inputText = "";
        console.log("pesquisou: " + text);
      }
    }
  }

}
