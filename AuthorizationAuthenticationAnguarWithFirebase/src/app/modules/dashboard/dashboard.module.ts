import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedValidationModule } from 'src/app/sharedModules/shared-validation.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddMoreVencatComponent } from './add-more-vencat/add-more-vencat.component';



@NgModule({
  declarations: [DashboardComponent, AddMoreVencatComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedValidationModule
  ]
})
export class DashboardModule {
  constructor(){
    console.log('Dashboard Module Loaded')
  }
}
