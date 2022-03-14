import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './bindings/bindings.component';
import { InterpolationComponent } from './bindings/interpolation/interpolation.component';
import { PropertyBindingComponent } from './bindings/property-binding/property-binding.component';
import { EventBindingComponent } from './bindings/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './bindings/two-way-binding/two-way-binding.component';

import { DirectivesComponent } from './directives/directives.component';

import { HomeComponent } from './home/home.component';
import { NgIfComponent } from './directives/ng-if/ng-if.component';
import { NgForComponent } from './directives/ng-for/ng-for.component';
import { NgSwitchComponent } from './directives/ng-switch/ng-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    HomeComponent,
    DirectivesComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
