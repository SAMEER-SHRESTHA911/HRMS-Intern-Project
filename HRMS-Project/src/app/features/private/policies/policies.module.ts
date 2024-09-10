import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PolicyFormComponent } from './components/policy-form/policy-form.component';
import { PolicyListComponent } from './components/policy-list/policy-list.component';
import { PoliciesRoutingModule } from './policies-routing.module';
import { PoliciesComponent } from './policies.component';
import { PolicyEffects } from './store/policy-list/policy-list.effects';
import { policyReducer } from './store/policy-list/policy-list.reducer';


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
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    StoreModule.forFeature('policy',policyReducer ),
    EffectsModule.forFeature([PolicyEffects])

  ]
})
export class PoliciesModule { }
