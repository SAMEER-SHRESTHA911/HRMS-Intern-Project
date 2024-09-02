import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveConfirmationPageRoutingModule } from './leave-confirmation-page-routing.module';
import { LeaveConfirmationPageComponent } from './leave-confirmation-page.component';
import { MaterialsModule } from '../../../materials/materials.module';
import { StoreModule } from '@ngrx/store';
import { LeaveConfirmationReducer } from './store/leave-confirmation.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LeaveConfirmationEffects } from './store/leave-confirmation.effects';


@NgModule({
  declarations: [
    LeaveConfirmationPageComponent
  ],
  imports: [
    CommonModule,
    LeaveConfirmationPageRoutingModule,
    MaterialsModule,
    StoreModule.forFeature('leaveRequestList',LeaveConfirmationReducer),
    EffectsModule.forFeature([LeaveConfirmationEffects])  
  ]
})
export class LeaveConfirmationPageModule { }
