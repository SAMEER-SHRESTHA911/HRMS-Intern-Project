import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceDetailsComponent } from './attendance-details/attendance-details.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: AttendanceDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class AttendanceRoutingModule {}
