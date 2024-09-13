import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/_guards/auth.guard';
import { UnsavedChangesGuard } from 'src/app/_guards/unsaved-changes.guard';
import { AddMoreVencatComponent } from './add-more-vencat/add-more-vencat.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canDeactivate:[UnsavedChangesGuard],
    canActivate:[AuthGuard],
    data:{
      breadcrumb:'Dashboard'
    }
  },
  {
    path: 'add-more-vencat',

    component:AddMoreVencatComponent,
    canDeactivate:[UnsavedChangesGuard],
    canActivate:[AuthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
