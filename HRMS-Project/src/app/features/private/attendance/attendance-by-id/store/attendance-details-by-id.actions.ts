import { createAction, props } from '@ngrx/store';
import { AttendanceRequestPayload, EmployeeByIdData } from '../../model/attendance-details.interface';

export const loadAttendanceListById = createAction(
  '[Attendance] Load Attendance List By Id',
  props<{ payload: AttendanceRequestPayload | {} }>()

);

export const loadAttendanceListByIdSuccess = createAction(
  '[Attendance] Load Attendance List By Id Success',
  props<{ response: EmployeeByIdData }>()
);

export const loadAttendanceListByIdFailure = createAction(
  '[Attendance] Load Attendance List By Id Failure',
  props<{ error: string }>()
);
