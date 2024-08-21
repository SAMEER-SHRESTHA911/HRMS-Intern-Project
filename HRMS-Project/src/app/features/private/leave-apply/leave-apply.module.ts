import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveApplyRoutingModule } from './leave-apply-routing.module';
import { LeaveApplyComponent } from './leave-apply.component';
import { MaterialsModule } from '../../../materials/materials.module';
import { EffectsModule } from '@ngrx/effects';
import { LeaveEffects } from './store/leave.effects';


@NgModule({
  declarations: [
    LeaveApplyComponent
  ],
  imports: [
    CommonModule,
    LeaveApplyRoutingModule,
    MaterialsModule,
    EffectsModule.forFeature([LeaveEffects])
  ]
})
export class LeaveApplyModule { }
