import { AfterViewInit, Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  private router: Router;
  public notHomePath: boolean;

  constructor(private rtr: Router) {
    this.router = rtr;
  }

  ngAfterViewInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(evnt => {
        var navigationEndEvent: NavigationEnd = evnt as NavigationEnd;
        var currentRoute: string = navigationEndEvent.url;
        this.notHomePath = currentRoute != '/' && currentRoute != '/home';
        console.log("rota: " + currentRoute);
      });
  }

}
