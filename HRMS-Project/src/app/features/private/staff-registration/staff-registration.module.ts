import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRegistrationRoutingModule } from './staff-registration-routing.module';
import { StaffRegistrationComponent } from './staff-registration.component';


@NgModule({
  declarations: [
    StaffRegistrationComponent
  ],
  imports: [
    CommonModule,
    StaffRegistrationRoutingModule
  ]
})
export class StaffRegistrationModule { }
