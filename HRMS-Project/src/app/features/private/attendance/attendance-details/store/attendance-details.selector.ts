import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AttendanceState } from './attendance-details.state';

export const selectAttendanceState =
  createFeatureSelector<AttendanceState>('attendance');

export const selectAttendanceRecords = createSelector(
  selectAttendanceState,
  (state: AttendanceState) => state.records
);

export const selectAttendanceLoading = createSelector(
  selectAttendanceState,
  (state: AttendanceState) => state.loading
);

export const selectAttendanceError = createSelector(
  selectAttendanceState,
  (state: AttendanceState) => state.error
);
