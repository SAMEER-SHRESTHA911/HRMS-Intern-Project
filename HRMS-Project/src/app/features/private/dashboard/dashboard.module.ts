import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MaterialsModule } from '../../../materials/materials.module';
import { LeaveStatsComponent } from './leave-stats/leave-stats.component';
import { CheckingInComponent } from './checking-in/checking-in.component';
import { StoreModule } from '@ngrx/store';
import { dashboardReducer } from './store/dashboard.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffect } from './store/dashboard.effect';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DashboardComponent, LeaveStatsComponent, CheckingInComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MaterialsModule,
    HttpClientModule,
    StoreModule.forFeature('dashboard', dashboardReducer),
    EffectsModule.forFeature([DashboardEffect]),
  ],
})
export class DashboardModule {}
