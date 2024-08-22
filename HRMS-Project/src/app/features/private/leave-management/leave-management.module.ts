import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveManagementRoutingModule } from './leave-management-routing.module';
import { LeaveManagementComponent } from './leave-management.component';
import { MaterialsModule } from '../../../materials/materials.module';


@NgModule({
  declarations: [
    LeaveManagementComponent
  ],
  imports: [
    CommonModule,
    LeaveManagementRoutingModule,
    MaterialsModule
  ]
})
export class LeaveManagementModule { }
