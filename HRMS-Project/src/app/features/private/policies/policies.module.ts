import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliciesRoutingModule } from './policies-routing.module';
import { PoliciesComponent } from './policies.component';
import { PolicyListComponent } from './components/policy-list/policy-list.component';
import { PolicyFormComponent } from './components/policy-form/policy-form.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';


@NgModule({
  declarations: [
    PoliciesComponent,
    PolicyListComponent,
    PolicyFormComponent,


  ],
  imports: [
    CommonModule,
    PoliciesRoutingModule,
    MatExpansionModule,
    FormsModule,
    MatLabel,
    MatFormField,
    // BrowserModule,
    HttpClientModule,
    MatInput,
    MatButtonModule,
    MatIcon

  ]
})
export class PoliciesModule { }
