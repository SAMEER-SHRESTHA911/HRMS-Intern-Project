
import {MatExpansionModule} from '@angular/material/expansion';
import { HrPoliciesComponent } from './policies/hr-policies/hr-policies.component';
import { LeavePoliciesComponent } from './policies/leave-policies/leave-policies.component';
import { ComapanyPoliciesComponent } from './policies/comapany-policies/comapany-policies.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations : [
    HrPoliciesComponent,
    LeavePoliciesComponent,
    ComapanyPoliciesComponent,


  ],
  imports :[
    MatExpansionModule
  ]
})

export class PoliciesModule {}



