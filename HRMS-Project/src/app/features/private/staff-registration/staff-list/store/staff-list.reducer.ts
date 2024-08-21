import { createReducer, on } from '@ngrx/store';
import { initialState } from './staff-list.state';
import {
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
  on(loadStaffListFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
