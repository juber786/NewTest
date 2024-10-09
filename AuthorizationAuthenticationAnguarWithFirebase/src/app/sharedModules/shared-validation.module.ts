import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmEqualValidatorDirective } from '../appDirective/confirm-equal-validator.directive';



@NgModule({
  declarations: [ConfirmEqualValidatorDirective],
  imports: [
    CommonModule
  ],
  exports:[
    ConfirmEqualValidatorDirective
  ]
})
export class SharedValidationModule {
  constructor(){
    console.log('Shared Module Loaded')
  }
}
