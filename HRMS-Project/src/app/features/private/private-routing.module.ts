import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ROUTE_CONSTANT } from '@shared/constants/routes.constant';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: ROUTE_CONSTANT.profileDetails,
    loadChildren: () =>
      import('./profile-details/profile-details.module').then(
        (m) => m.ProfileDetailsModule
      ),
  },
  {
    path: ROUTE_CONSTANT.staffRegistration,
    loadChildren: () =>
      import('./staff-registration/staff-registration.module').then(
        (m) => m.StaffRegistrationModule
      ),
  },
  {
    path: ROUTE_CONSTANT.dashboard,
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: ROUTE_CONSTANT.leaveApply,
    loadChildren: () =>
      import('./leave-apply/leave-apply.module').then(
        (m) => m.LeaveApplyModule
      ),
  },
  {
    path: ROUTE_CONSTANT.leaveManagement,
    loadChildren: () =>
      import('./leave-management/leave-management.module').then(
        (m) => m.LeaveManagementModule
      ),
  },
  {
    path: ROUTE_CONSTANT.staffManagement,
    loadChildren: () =>
      import('./staff-registration/staff-registration.module').then(
        (m) => m.StaffRegistrationModule
      ),
  },
  {
    path: ROUTE_CONSTANT.policies,
    loadChildren: () =>
      import('./policies/policies.module').then((m) => m.PoliciesModule),
  },
  {
    path: ROUTE_CONSTANT.leaveConfirmationPage,
    loadChildren: () =>
      import('./leave-confirmation-page/leave-confirmation-page.module').then(
        (m) => m.LeaveConfirmationPageModule
      ),
  },
  // {
  //   path: ROUTE_CONSTANT.changePassword,
  //   loadChildren: () =>
  //     import('./change-password/change-password.module').then(
  //       (m)=> m.ChangePasswordModule
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
