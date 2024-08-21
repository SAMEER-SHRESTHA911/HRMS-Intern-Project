import { createAction, props } from '@ngrx/store';
import { StaffList } from '../model/staff-list';

export const loadStaffList = createAction('[Staff List] Load StaffList');

export const loadStaffListSuccess = createAction(
  '[Staff List] Load StaffList Success',
  props<{ staff: StaffList[] }>()
);

export const loadStaffListFailure = createAction(
  '[Staff List] Load StaffList Failure',
  props<{ error: string }>()
);
