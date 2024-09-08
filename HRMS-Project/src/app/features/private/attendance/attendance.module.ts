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
import { DepartmentEffects } from '@shared/store/add-staff-dropdowns/department/department.effects';
import { departmentReducer } from '@shared/store/add-staff-dropdowns/department/department.reducer';
import { AttendanceByIdComponent } from './attendance-by-id/attendance-by-id.component';

@NgModule({
  declarations: [AttendanceDetailsComponent, AttendanceCalanderComponent, AttendanceByIdComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    AttendanceRoutingModule,
    StoreModule.forFeature('attendance', attendanceReducer),
    StoreModule.forFeature('department', departmentReducer),


    EffectsModule.forFeature([
      AttendanceEffects,
      DepartmentEffects,
    ]),
  ],
  exports: [AttendanceDetailsComponent, AttendanceCalanderComponent],
})
export class AttendanceModule { }
