import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveManagementRoutingModule } from './leave-management-routing.module';
import { LeaveManagementComponent } from './leave-management.component';
import { MaterialsModule } from '../../../materials/materials.module';
import { LeaveTableComponent } from './components/leave-table/leave-table.component';
import { ROUTE_CONSTANT } from '../../../shared/constants/routes.constant';
import { StoreModule, StoreRootModule } from '@ngrx/store';
import { leaveTableReducer } from './store/leave-table-reducer';
import { EffectsModule } from '@ngrx/effects';
import { LeaveTableEffects } from './store/leave-table-effects';


@NgModule({
  declarations: [
    LeaveManagementComponent,
    LeaveTableComponent
  ],
  imports: [
    CommonModule,
    LeaveManagementRoutingModule,
    MaterialsModule,
    StoreModule.forFeature('leaveTableData', leaveTableReducer),
    EffectsModule.forFeature([  LeaveTableEffects ])
  ]
})
export class LeaveManagementModule { }
