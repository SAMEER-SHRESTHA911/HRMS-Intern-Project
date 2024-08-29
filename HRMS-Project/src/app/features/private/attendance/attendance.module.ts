import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '../../../materials/materials.module';
import { AttendanceDetailsComponent } from './attendance-details/attendance-details.component';
import { AttendanceCalanderComponent } from './attendance-calander/attendance-calander.component';
import { AttendanceRoutingModule } from './attendance-routing.module';
import { attendanceReducer } from './attendance-details/store/attendance-details.reducer';
import { AttendanceEffects } from './attendance-details/store/attendance-details.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AttendanceDetailsComponent, AttendanceCalanderComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    AttendanceRoutingModule,
    StoreModule.forFeature('attendance', attendanceReducer),
    EffectsModule.forFeature([AttendanceEffects]),
  ],
  exports: [AttendanceDetailsComponent, AttendanceCalanderComponent],
})
export class AttendanceModule {}
