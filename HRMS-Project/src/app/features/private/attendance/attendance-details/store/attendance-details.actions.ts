import { createAction, props } from '@ngrx/store';
import { AttendanceRequestPayload, EmployeeAttendanceRecord } from '../../model/attendance-details.interface';
import { ResponseType } from '@shared/models/response.model';

export const loadAttendanceList = createAction(
  '[Attendance] Load Attendance List',
  props<{ payload: AttendanceRequestPayload }>()

);

export const loadAttendanceListSuccess = createAction(
  '[Attendance] Load Attendance List Success',
  props<{ response: EmployeeAttendanceRecord[] }>()
);

export const loadAttendanceListFailure = createAction(
  '[Attendance] Load Attendance List Failure',
  props<{ error: string }>()
);
