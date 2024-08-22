import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveManagementRoutingModule } from './leave-management-routing.module';
import { LeaveManagementComponent } from './leave-management.component';
import { MaterialsModule } from '../../../materials/materials.module';
import { LeaveTableComponent } from './components/leave-table/leave-table.component';


@NgModule({
  declarations: [
    LeaveManagementComponent,
    LeaveTableComponent
  ],
  imports: [
    CommonModule,
    LeaveManagementRoutingModule,
    MaterialsModule
  ]
})
export class LeaveManagementModule { }
