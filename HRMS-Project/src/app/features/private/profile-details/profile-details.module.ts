import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileDetailsRoutingModule } from './profile-details-routing.module';
import { ProfileDetailsComponent } from './profile-details.component';
import { MaterialsModule } from '../../../materials/materials.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ProfileDetailsComponent],
  imports: [
    CommonModule,
    ProfileDetailsRoutingModule,
    MaterialsModule,
    MatButtonModule,
  ],
})
export class ProfileDetailsModule {}
