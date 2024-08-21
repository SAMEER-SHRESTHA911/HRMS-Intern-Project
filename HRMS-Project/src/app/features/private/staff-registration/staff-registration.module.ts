import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRegistrationRoutingModule } from './staff-registration-routing.module';
import { StaffRegistrationComponent } from './staff-registration.component';
import { MaterialsModule } from '../../../materials/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StaffEffects } from './add-staff/store/add-staff.effects';
import { staffReducer } from './add-staff/store/add-staff.reducer';
import { StaffListEffects } from './staff-list/store/staff-list.effects';
import { staffListReducer } from './staff-list/store/staff-list.reducer';

@NgModule({
  declarations: [
    StaffRegistrationComponent,
    AddStaffComponent,
    StaffListComponent,
  ],
  imports: [
    CommonModule,
    StaffRegistrationRoutingModule,
    MaterialsModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('staff', staffReducer),
    StoreModule.forFeature('staffList', staffListReducer),
    EffectsModule.forFeature([StaffEffects, StaffListEffects]),
  ],
})
export class StaffRegistrationModule {}
