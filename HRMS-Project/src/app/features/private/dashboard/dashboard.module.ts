import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MaterialsModule } from '../../../materials/materials.module';
import { LeaveStatsComponent } from './leave-stats/leave-stats.component';
import { CheckingInComponent } from './checking-in/checking-in.component';


@NgModule({
  declarations: [DashboardComponent, LeaveStatsComponent, CheckingInComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MaterialsModule,
  ],
})
export class DashboardModule {}
