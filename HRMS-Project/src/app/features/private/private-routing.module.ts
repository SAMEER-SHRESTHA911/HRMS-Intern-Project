import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
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
  { path: 'leave-management', loadChildren: () => import('./leave-management/leave-management.module').then(m => m.LeaveManagementModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
