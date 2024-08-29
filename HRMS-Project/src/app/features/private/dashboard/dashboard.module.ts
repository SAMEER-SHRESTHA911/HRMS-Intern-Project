import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MaterialsModule } from '../../../materials/materials.module';
import { LeaveStatsComponent } from './components/leave-stats/leave-stats.component';
import { CheckingInComponent } from './components/checking-in/checking-in.component';
import { StoreModule } from '@ngrx/store';
import { dashboardReducer } from './store/dashboard/dashboard.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffect } from './store/dashboard/dashboard.effect';
import { CheckingInDialogComponent } from './components/checking-in-dialog/checking-in-dialog.component';

@NgModule({
  declarations: [DashboardComponent, LeaveStatsComponent, CheckingInComponent, CheckingInDialogComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MaterialsModule,
    StoreModule.forFeature('dashboard', dashboardReducer),
    EffectsModule.forFeature([DashboardEffect]),
  ],
})
export class DashboardModule {}
