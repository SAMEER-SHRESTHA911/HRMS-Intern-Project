import {
  postCheckInAction,
  postCheckInFailure,
  postCheckInSuccess,
} from './checkin-in.actions';
import { initialState } from './checkin-in.state';
import { createReducer, on } from '@ngrx/store';

export const postCheckInReducer = createReducer(
  initialState,
  on(postCheckInAction, (state) => ({
    ...state,
    loading: true,
    error: '',
  })),
  on(postCheckInSuccess, (state, { data }) => ({
    ...state,
    loading: false,
    data,
  })),
  on(postCheckInFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
