import {
  postCheckIn,
  postCheckInFailure,
  postCheckInSuccess,
} from './checkin-in.actions';
import { initialState } from './checkin-in.state';
import { createReducer, on } from '@ngrx/store';

export const postCheckInReducer = createReducer(
  initialState,
  on(postCheckIn, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(postCheckInSuccess, (state, { data }) => ({
    ...state,
    loading: false,
    data: data,
  })),
  on(postCheckInFailure, (state, { error }) => ({
    ...state,
    loading: false,
    // error,
  }))
);
