import { createAction, props } from '@ngrx/store';
import { AttendanceRecord } from '../../model/attendance-details.interface';

export const loadAttendanceRecords = createAction(
  '[Attendance] Load Attendance Records'
);

export const loadAttendanceRecordsSuccess = createAction(
  '[Attendance] Load Attendance Records Success',
  props<{ records: AttendanceRecord[] }>()
);

export const loadAttendanceRecordsFailure = createAction(
  '[Attendance] Load Attendance Records Failure',
  props<{ error: string }>()
);
