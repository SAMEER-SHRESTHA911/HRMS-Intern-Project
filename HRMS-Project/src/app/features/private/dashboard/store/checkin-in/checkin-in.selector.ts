import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CheckInState } from './checkin-in.state';

export const selectCheckInState =
  createFeatureSelector<CheckInState>('checkIn');

export const selectCheckInData = createSelector(
  selectCheckInState,
  (state: CheckInState) => state.checkInData
);

export const selectLoading = createSelector(
  selectCheckInState,
  (state: CheckInState) => state.loading
);

export const selectError = createSelector(
  selectCheckInState,
  (state: CheckInState) => state.error
);
