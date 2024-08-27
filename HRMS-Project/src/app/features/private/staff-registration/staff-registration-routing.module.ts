import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffRegistrationComponent } from './staff-registration.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { ProfileEditComponent } from '../profile-details/profile-edit/profile-edit.component';

const routes: Routes = [
  // { path: '', redirectTo: 'staff_management', pathMatch:'full' },
  { path: 'add-staff', component: AddStaffComponent },
  { path: 'staff-list', component: StaffListComponent },
  { path: '', component: StaffListComponent },
  {
    path: 'edit-staff/:id',
    component: AddStaffComponent,
  },
  {
    path: 'admin/profile-details/:id',
    component: ProfileEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRegistrationRoutingModule {}
