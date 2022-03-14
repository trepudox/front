import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './bindings/bindings.component';
import { DirectivesComponent } from './directives/directives.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'bindings', component: BindingComponent },
  { path: 'directives', component: DirectivesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
