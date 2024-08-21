import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveApplyRoutingModule } from './leave-apply-routing.module';
import { LeaveApplyComponent } from './leave-apply.component';
import { MaterialsModule } from '../../../materials/materials.module';


@NgModule({
  declarations: [
    LeaveApplyComponent
  ],
  imports: [
    CommonModule,
    LeaveApplyRoutingModule,
    MaterialsModule
  ]
})
export class LeaveApplyModule { }
