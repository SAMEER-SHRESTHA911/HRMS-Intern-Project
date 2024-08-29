import { createReducer, on } from '@ngrx/store';
import { initialAttendanceState } from './attendance-details.state';
import {
  loadAttendanceRecords,
  loadAttendanceRecordsSuccess,
  loadAttendanceRecordsFailure,
} from './attendance-details.actions';

export const attendanceReducer = createReducer(
  initialAttendanceState,

  on(loadAttendanceRecords, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(loadAttendanceRecordsSuccess, (state, { records }) => ({
    ...state,
    records,
    loading: false,
    error: null,
  })),

  on(loadAttendanceRecordsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
