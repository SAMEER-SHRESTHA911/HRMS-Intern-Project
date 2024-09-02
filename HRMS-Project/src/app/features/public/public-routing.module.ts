import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { OTPComponent } from './otp/otp.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/login', pathMatch: 'full'
  },
  {
    path:'login', component : LoginComponent
  },
  {
    path:'forget-password', component: ForgetPasswordComponent
  },
  {
    path:'otp', component:OTPComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
