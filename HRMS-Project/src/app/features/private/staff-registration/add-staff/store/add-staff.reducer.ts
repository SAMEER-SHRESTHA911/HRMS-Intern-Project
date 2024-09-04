import { createReducer, on } from '@ngrx/store';
import * as EmployeeActions from './add-staff.actions';
import {
  addStaff,
  addStaffSuccess,
  addStaffFailure,
} from './add-staff.actions';
import { StaffState, initialState } from './add-staff.state';


export const staffReducer = createReducer(
  initialState,
  on(addStaff, (state): StaffState => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(addStaffSuccess, (state): StaffState => ({
    ...state,
    loading: false,
    error: null,
  })),
  on(addStaffFailure, (state, { error }): StaffState => ({
    ...state,
    loading: false,
    error: error,
    staff: null,
  })),
  on(EmployeeActions.fetchEmployeeData, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(EmployeeActions.fetchEmployeeDataSuccess, (state) => ({
    ...state,
    loading: false,
  })),
  on(EmployeeActions.fetchEmployeeDataFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
