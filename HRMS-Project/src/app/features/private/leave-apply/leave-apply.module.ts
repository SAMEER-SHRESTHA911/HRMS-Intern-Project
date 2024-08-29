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
import { DayLeaveDropdownEffects } from '../../../shared/store/day-leave-dropdown/day-leave.effects';
import { FetchDayLeaveReducer } from '../../../shared/store/day-leave-dropdown/day-leave.reducer';


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
    EffectsModule.forFeature([DayLeaveDropdownEffects]),
    StoreModule.forFeature('dayLeaveDropdown', FetchDayLeaveReducer),
    StoreModule.forFeature('leaveApply', leaveReducer),
    StoreModule.forFeature('leaveEdit', LeaveEditReducer)
  ]
})
export class LeaveApplyModule { }
