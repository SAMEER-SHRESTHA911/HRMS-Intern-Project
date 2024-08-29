import {
  createFeature,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { LeaveAvailableState } from './leave-available.state';

export const selectAvailableLeaveData =
  createFeatureSelector<LeaveAvailableState>('availableLeaveData');

export const selectAvailableLeave = createSelector(
  selectAvailableLeaveData,
  (state) => state.availableData
);

export const selectAvailableLeaveLoading = createSelector(
  selectAvailableLeaveData,
  (state) => state.loading
);

export const selectAvailableLeaveError = createSelector(
  selectAvailableLeaveData,
  (state) => state.error
);
