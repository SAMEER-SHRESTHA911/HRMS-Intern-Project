import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeavePoliciesComponent } from './leave-policies/leave-policies.component';
import { HrPoliciesComponent } from './hr-policies/hr-policies.component';
import { CompanyPoliciesComponent } from './company-policies/company-policies.component';



@NgModule({
  declarations: [
    LeavePoliciesComponent,
    HrPoliciesComponent,
    CompanyPoliciesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PoliciesModule { }
