import { createSelector, createFeatureSelector } from '@ngrx/store';
import { StaffState } from './add-staff.state';

export const selectStaffState = createFeatureSelector<StaffState>('staff');

export const selectAllStaff = createSelector(
  selectStaffState,
  (state: StaffState) => state.staff
);

export const selectStaffLoading = createSelector(
  selectStaffState,
  (state: StaffState) => state.loading
);

export const selectStaffError = createSelector(
  selectStaffState,
  (state: StaffState) => state.error
);
