import { createAction, props } from '@ngrx/store';
import { LeaveAvailableData } from '../../types/leave-table';

export const FETCH_AVAILABLE_LEAVE_DATA = createAction(
  '[leave available] get leave available'
);
export const FETCH_AVAILABLE_LEAVE_DATA_SUCCESS = createAction(
  '[leave available] get leave available success',
  props<{ availableLeaveData: LeaveAvailableData }>()
);
export const FETCH_AVAILABLE_LEAVE_DATA_FAILURE = createAction(
  '[leave available] get leave available failure',
  props<{ error: string }>()
);
