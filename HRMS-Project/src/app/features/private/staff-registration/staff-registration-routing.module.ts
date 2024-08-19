import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffRegistrationComponent } from './staff-registration.component';

const routes: Routes = [{ path: '', component: StaffRegistrationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRegistrationRoutingModule { }
