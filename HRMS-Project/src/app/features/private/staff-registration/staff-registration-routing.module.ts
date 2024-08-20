import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffRegistrationComponent } from './staff-registration.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { StaffListComponent } from './staff-list/staff-list.component';

const routes: Routes = [
  { path: '', component: StaffRegistrationComponent },
  { path: 'add-staff', component: AddStaffComponent },
  { path: 'staff-list', component: StaffListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRegistrationRoutingModule {}
