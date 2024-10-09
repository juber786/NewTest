import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ImgvalidationRoutingModule } from './imgvalidation-routing.module';
import { UploadImageComponent } from './upload-image/upload-image.component';


@NgModule({
  declarations: [UploadImageComponent],
  imports: [
    CommonModule,
    ImgvalidationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ImgvalidationModule {
  constructor(){
    console.log('Image Validation Module Loaded')
  }
}
