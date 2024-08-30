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
import { HttpClientModule } from '@angular/common/http';
import { CheckingInDialogComponent } from './components/checking-in-dialog/checking-in-dialog.component';
import { postCheckInReducer } from './store/checkin-in/checkin-in.reducer';
import { CheckInEffects } from './store/checkin-in/checkin-in.effects';
import { TodaysAttendanceComponent } from './components/todays-attendance/todays-attendance.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LeaveStatsComponent,
    CheckingInComponent,
    CheckingInDialogComponent,
    TodaysAttendanceComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MaterialsModule,
    HttpClientModule,
    StoreModule.forFeature('dashboard', dashboardReducer),
    EffectsModule.forFeature([DashboardEffect]),
    StoreModule.forFeature('checkIn', postCheckInReducer),
    EffectsModule.forFeature([CheckInEffects]),
  ],
})
export class DashboardModule {}
