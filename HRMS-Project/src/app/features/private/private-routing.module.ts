import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'profile-details',
    loadChildren: () =>
      import('./profile-details/profile-details.module').then(
        (m) => m.ProfileDetailsModule
      ),
  },
  {
    path: 'staff-registration',
    loadChildren: () =>
      import('./staff-registration/staff-registration.module').then(
        (m) => m.StaffRegistrationModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'leave-apply',
    loadChildren: () =>
      import('./leave-apply/leave-apply.module').then(
        (m) => m.LeaveApplyModule
      ),
  },
  {
    path: 'leave-management',
    loadChildren: () =>
      import('./leave-management/leave-management.module').then(
        (m) => m.LeaveManagementModule
      ),
  },
  {
    path: 'staff_management',
    loadChildren: () =>
      import('./staff-registration/staff-registration.module').then(
        (m) => m.StaffRegistrationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
