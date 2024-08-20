import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ReactiveFormsModule } from '@angular/forms';

;

import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [PublicComponent, LoginComponent, ForgetPasswordComponent, NotFoundComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ReactiveFormsModule

  ],
})
export class PublicModule {}
