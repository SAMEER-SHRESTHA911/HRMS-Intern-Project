import {
  CheckInDetails,
  CheckInDetailsResponse,
} from './../../types/check-in.interface';
import { createAction, props } from '@ngrx/store';

export const postCheckIn = createAction(
  '[CheckIn] Post CheckIn',
  props<{ checkInDetails: CheckInDetails }>()
);

export const postCheckInSuccess = createAction(
  '[CheckIn Post CheckIn Success]',
  props<{ data: CheckInDetailsResponse }>()
);

export const postCheckInFailure = createAction(
  '[CheckIn] Post CheckIn Failure',
  props<{ error: string }>()
);
