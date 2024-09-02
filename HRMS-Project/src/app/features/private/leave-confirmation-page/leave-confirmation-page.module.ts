import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveConfirmationPageRoutingModule } from './leave-confirmation-page-routing.module';
import { LeaveConfirmationPageComponent } from './leave-confirmation-page.component';
import { MaterialsModule } from '../../../materials/materials.module';
import { StoreModule } from '@ngrx/store';
import { LeaveConfirmationReducer } from './store/leave-confirmation/leave-confirmation.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LeaveConfirmationEffects } from './store/leave-confirmation/leave-confirmation.effects';
import { LeaveManagementModule } from '../leave-management/leave-management.module';
import { LeaveApproveCardComponent } from './components/leave-approve-card/leave-approve-card.component';


@NgModule({
  declarations: [
    LeaveConfirmationPageComponent,
    LeaveApproveCardComponent
  ],
  imports: [
    CommonModule,
    LeaveConfirmationPageRoutingModule,
    MaterialsModule,
    LeaveManagementModule,
    StoreModule.forFeature('leaveRequestList',LeaveConfirmationReducer),
    EffectsModule.forFeature([LeaveConfirmationEffects])  
  ]
})
export class LeaveConfirmationPageModule { }
