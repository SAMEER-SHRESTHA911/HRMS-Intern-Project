import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileDetailsRoutingModule } from './profile-details-routing.module';
import { ProfileDetailsComponent } from './profile-details.component';
import { MaterialsModule } from '../../../materials/materials.module';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfileDetailsComponent, ProfileEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProfileDetailsRoutingModule,
    MaterialsModule,
  ],
})
export class ProfileDetailsModule {}
