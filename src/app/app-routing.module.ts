import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SinginComponent } from './components/singin/singin.component';

const routes: Routes = [
  {
    path: 'sing-in',
    component: SinginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }, 
  {
    path: '',
    component: SinginComponent
  },
  {
    path: '**',
    component: SinginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
