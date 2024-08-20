import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffRegistrationComponent } from './staff-registration.component';
import { AddStaffComponent } from './add-staff/add-staff.component';

const routes: Routes = [
  { path: '', component: StaffRegistrationComponent },
  { path: 'add-staff', component: AddStaffComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRegistrationRoutingModule {}
