import { createAction, props } from '@ngrx/store';
import { ProfileDetails } from '../models/profile-details';

export const loadProfileDetailsAction = createAction(
  '[Load Profile] Load Profile Detail'
);

export const loadProfileDetailsActionSuccess = createAction(
  '[Load Profile] Load Profile Success',
  props<{ profileDetails: ProfileDetails[] }>()
);

export const loadProfileDetailsActionFailure = createAction(
  '[Load Profile] Load Profile Failure',
  props<{ error: string }>()
);
