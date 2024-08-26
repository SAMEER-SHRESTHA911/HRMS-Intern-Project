import { createAction, props } from '@ngrx/store';
import { LeaveApplyBody } from '../../types/leave-apply';

export const GET_EDIT_LEAVE_DATA = createAction(
  '[Leave Edit]  Get Edit Leave Data',
  props<{ id:  string }>()

);
export const GET_EDIT_LEAVE_DATA_SUCCESS = createAction(
  '[Leave Edit]  Get Edit Leave Data Success',
  props<{ editLeaveData: LeaveApplyBody }>()
);
export const GET_EDIT_LEAVE_DATA_FAILURE = createAction(
  '[Leave Edit]  Get Edit Leave Data Fail',
  props<{ error: string|null }>()
);
