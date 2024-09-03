import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileDetailsRoutingModule } from './profile-details-routing.module';
import { MaterialsModule } from '../../../materials/materials.module';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileDetailsComponent } from './profile-details.component';
import { profileDetailsReducer } from './store/profile-details.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProfileDetailsEffect } from './store/profile-details.effect';
import { MatIconModule } from '@angular/material/icon';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [ProfileDetailsComponent, ProfileEditComponent],
  imports: [
    MatIconModule,
    MatMenu,
    MatButtonModule,
    MatMenuModule,
    CommonModule,
    ReactiveFormsModule,
    ProfileDetailsRoutingModule,
    MaterialsModule,
    StoreModule.forFeature('profileDetails', profileDetailsReducer),
    EffectsModule.forFeature([ProfileDetailsEffect]),
  ],
})
export class ProfileDetailsModule {}
