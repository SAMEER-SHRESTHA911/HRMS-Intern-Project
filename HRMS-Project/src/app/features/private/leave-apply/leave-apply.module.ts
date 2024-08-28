import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveApplyRoutingModule } from './leave-apply-routing.module';
import { LeaveApplyComponent } from './leave-apply.component';
import { MaterialsModule } from '../../../materials/materials.module';
import { EffectsModule } from '@ngrx/effects';
import { LeaveEffects } from './store/leave-apply-submit/leave.effects';
import { LeaveEditEffect } from './store/leave-apply-form/leave-edit.effects';
import { StoreModule } from '@ngrx/store';
import { leaveReducer } from './store/leave-apply-submit/leave.reducer';
import { LeaveEditReducer } from './store/leave-apply-form/leave-edit.reducer';


@NgModule({
  declarations: [
    LeaveApplyComponent
  ],
  imports: [
    CommonModule,
    LeaveApplyRoutingModule,
    MaterialsModule,
    EffectsModule.forFeature([LeaveEffects]),
    EffectsModule.forFeature([LeaveEditEffect]),
    StoreModule.forFeature('leaveApply', leaveReducer),
    StoreModule.forFeature('leaveEdit', LeaveEditReducer)
  ]
})
export class LeaveApplyModule { }
