// add-staff.reducer.ts
import { createReducer, on } from '@ngrx/store';
import {
  addStaff,
  addStaffSuccess,
  addStaffFailure,
} from './add-staff.actions';
import { StaffState, initialState } from './add-staff.state';

export const staffReducer = createReducer(
  initialState,
  on(addStaff, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(addStaffSuccess, (state, { staff }) => ({
    ...state,
    staff: [...state.staff, staff],
    loading: false,
  })),
  on(addStaffFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  }))
);
