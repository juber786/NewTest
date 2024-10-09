import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { OnboardLayoutComponent } from './layout/onboard-layout/onboard-layout.component';

import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { AuthGuard } from './_guards/auth.guard';
import { CustomPreloadingService } from './_services/custom-preloading.service';

const routes: Routes = [
  {
    path: '',
    component: OnboardLayoutComponent,

    children: [
      {
        path:'',
        redirectTo:'/login',
        pathMatch:'full',
        data:{
          breadcrumb:'Login'
        }
      },
      {
        path:'',

        loadChildren: () => import('./modules/onboard/onboard.module').then(m => m.OnboardModule)

      }
    ]

  },

  {
    path: '',
    component: UserLayoutComponent,

    children: [
      {
        path:'',
        redirectTo:'/dashboard',
        pathMatch:'full',
        canActivate:[AuthGuard],
        data:{
          breadcrumb:'Dashboard'
        }
      },
      {
        path: '',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)

      },
      {
        path: '',
        loadChildren:() => import('./modules/product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'uploadImage',
        loadChildren:() => import('./modules/imgvalidation/imgvalidation.module').then(m => m.ImgvalidationModule),
        data:{
          breadcrumb:'UploadImage',
          preload:true
        }
      }

    ]
  },

];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules})],
  imports: [RouterModule.forRoot(routes, {preloadingStrategy:CustomPreloadingService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
