import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ROUTE_CONSTANT } from '../../shared/constants/routes.constant';

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
    path: `${ROUTE_CONSTANT['staff-management']}`,
    loadChildren: () =>
      import('./staff-registration/staff-registration.module').then(
        (m) => m.StaffRegistrationModule
      ),
  },
  {
    path: 'policies',
    loadChildren: () =>
      import('./policies/policies.module').then((m) => m.PoliciesModule),
  },
  {
    path: 'policies',
    loadChildren: () =>
      import('./policies/policies.module').then((m) => m.PoliciesModule),
  },
  { path: 'leave-confirmation-page', loadChildren: () => import('./leave-confirmation-page/leave-confirmation-page.module').then(m => m.LeaveConfirmationPageModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
