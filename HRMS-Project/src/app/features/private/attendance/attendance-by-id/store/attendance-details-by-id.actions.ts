import { createAction, props } from '@ngrx/store';
import {
  AttendanceData,
  AttendanceRequestPayload,
  CalenderViewData,
  EmployeeAttendanceRecord,
} from '../../model/attendance-details.interface';
import { ResponseType } from '@shared/models/response.model';

export const loadAttendanceListById = createAction(
  '[Attendance] Load Attendance List By Id',
  props<{ payload: AttendanceRequestPayload | {} }>()
);

export const loadAttendanceListByIdSuccess = createAction(
  '[Attendance] Load Attendance List By Id Success',
  props<{ response: AttendanceData; calendarData: CalenderViewData[] }>()
);

export const loadAttendanceListByIdFailure = createAction(
  '[Attendance] Load Attendance List By Id Failure',
  props<{ error: string }>()
);
