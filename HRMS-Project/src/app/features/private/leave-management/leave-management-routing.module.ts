import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveManagementComponent } from './leave-management.component';
import { LeaveApproveRejectComponent } from './components/leave-approve-reject/leave-approve-reject.component';

const routes: Routes = [
  { path: '', component: LeaveManagementComponent },
  { path: 'leave-confirmation', component: LeaveApproveRejectComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaveManagementRoutingModule {}
