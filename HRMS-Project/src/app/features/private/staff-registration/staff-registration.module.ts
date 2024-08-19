import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRegistrationRoutingModule } from './staff-registration-routing.module';
import { StaffRegistrationComponent } from './staff-registration.component';
import { MaterialsModule } from '../../../materials/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddStaffComponent } from './add-staff/add-staff.component';

@NgModule({
  declarations: [StaffRegistrationComponent, AddStaffComponent],
  imports: [
    CommonModule,
    StaffRegistrationRoutingModule,
    MaterialsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class StaffRegistrationModule {}
