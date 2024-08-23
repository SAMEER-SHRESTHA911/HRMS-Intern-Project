import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliciesRoutingModule } from './policies-routing.module';
import { PoliciesComponent } from './policies.component';
import { HRComponent } from './components/hr/hr.component';
import { CompanyComponent } from './components/company/company.component';
import { LeaveComponent } from './components/leave/leave.component';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    PoliciesComponent,
    HRComponent,
    CompanyComponent,
    LeaveComponent
  ],
  imports: [
    CommonModule,
    PoliciesRoutingModule,
    MatExpansionModule
  ]
})
export class PoliciesModule { }
