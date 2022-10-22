import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SinginComponent } from './components/singin/singin.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'sing-in',
    component: SinginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
