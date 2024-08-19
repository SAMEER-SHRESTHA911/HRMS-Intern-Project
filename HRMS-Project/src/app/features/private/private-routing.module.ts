import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  {
    path:'',
    component:PrivateComponent
  },
  { path: 'profile-details', loadChildren: () => import('./profile-details/profile-details.module').then(m => m.ProfileDetailsModule) }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
