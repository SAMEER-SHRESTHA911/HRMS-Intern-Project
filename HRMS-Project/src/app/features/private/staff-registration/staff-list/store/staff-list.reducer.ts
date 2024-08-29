import { createReducer, on } from '@ngrx/store';
import { initialState } from './staff-list.state';
import {
  deleteStaffDetails,
  deleteStaffDetailsFailure,
  deleteStaffDetailsSucess,
  editStaffDetails,
  editStaffDetailsFailure,
  editStaffDetailsSucess,
  loadStaffList,
  loadStaffListFailure,
  loadStaffListSuccess,
} from './staff-list.actions';
import { state } from '@angular/animations';

export const staffListReducer = createReducer(
  initialState,
  on(loadStaffList, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadStaffListSuccess, (state, { staff }) => ({
    ...state,
    staff,
    loading: false,
  })),

  on(loadStaffListFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(deleteStaffDetails, (state) => ({
    ...state,
    loading: true,
  })),
  on(deleteStaffDetailsSucess, (state, { id }) => ({
    ...state,
    staff: state.staff.filter((staff) => staff.id !== id),
    error: null,
  })),
  on(deleteStaffDetailsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(editStaffDetails, (state) => ({
    ...state,
    loading: true,
  })),
  on(editStaffDetailsSucess, (state, { id }) => ({
    ...state,
    staff: state.staff.filter((staff) => staff.id !== id),
    loading: false,
    error: null,
  })),
  on(editStaffDetailsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
