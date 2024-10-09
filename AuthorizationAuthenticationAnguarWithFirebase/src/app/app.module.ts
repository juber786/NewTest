import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { AppHttpClientCreator, HttpService } from './_helpers/http.service';
import { UnsavedChangesGuard } from './_guards/unsaved-changes.guard';
import { AuthGuard } from './_guards/auth.guard';
import { OnboardLayoutComponent } from './layout/onboard-layout/onboard-layout.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { AuthInterceptor } from './_services/auth.intercepter';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    OnboardLayoutComponent,
    UserLayoutComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true},AuthGuard, UnsavedChangesGuard,{
    provide: HttpService,
    useFactory: AppHttpClientCreator,
    deps: [HttpClient]
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('App Module Loaded')
  }
}
