import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnboardLayoutComponent } from 'src/app/layout/onboard-layout/onboard-layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardRoutingModule { }
