import { createAction, props } from '@ngrx/store';
import { LeaveTypeDropdown } from './leave-type.state';

export const FETCH_LEAVE_TYPE_DROPDOWN = createAction(
  '[day leave dropdown] fetch'
);
export const FETCH_LEAVE_TYPE_DROPDOWN_SUCCESS = createAction(
  '[day leave dropdown] fetch success',
  props<{ leaveTypeDropdown: LeaveTypeDropdown[] }>()
);
export const FETCH_LEAVE_TYPE_DROPDOWN_FAILURE = createAction(
  '[day leave dropdown] fetch fail',
  props<{ error: string | null }>()
);
