import { createReducer, on } from '@ngrx/store';
import { initialState } from './profile-details.state';
import {
  loadProfileDetailsAction,
  loadProfileDetailsActionFailure,
  loadProfileDetailsActionSuccess,
} from './profile-details.action';

export const profileDetailsReducer = createReducer(
  initialState,
  on(loadProfileDetailsAction, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadProfileDetailsActionSuccess, (state, { profileDetails }) => ({
    ...state,
    profileDetails,
    loading: false,
  })),
  on(loadProfileDetailsActionFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
