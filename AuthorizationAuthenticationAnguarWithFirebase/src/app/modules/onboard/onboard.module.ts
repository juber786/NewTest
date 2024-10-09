import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnboardRoutingModule } from './onboard-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    OnboardRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class OnboardModule { }
