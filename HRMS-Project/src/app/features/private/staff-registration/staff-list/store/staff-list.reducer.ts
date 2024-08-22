import { createReducer, on } from '@ngrx/store';
import { initialState } from './staff-list.state';
import {
  deleteStaffDetails,
  deleteStaffDetailsFailure,
  deleteStaffDetailsSucess,
  loadStaffList,
  loadStaffListFailure,
  loadStaffListSuccess,
} from './staff-list.actions';

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

  on(loadStaffListSuccess, (state, { staff }) => ({
    ...state,
    staff,
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
  }))
);
