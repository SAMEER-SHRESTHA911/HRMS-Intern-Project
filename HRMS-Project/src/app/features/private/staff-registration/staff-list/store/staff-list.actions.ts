import { createAction, props } from '@ngrx/store';
import { StaffList } from '../model/staff-list';
import { StaffDetails } from '../../add-staff/model/add-staff';

export const loadStaffList = createAction('[Staff List] Load StaffList');

export const loadStaffListSuccess = createAction(
  '[Staff List] Load StaffList Success',
  props<{ staff: StaffList[] }>()
);

export const loadStaffListFailure = createAction(
  '[Staff List] Load StaffList Failure',
  props<{ error: string }>()
);
export const deleteStaffDetails = createAction(
  '[Staff List] delete StaffListDetails',
  props<{ id: number | string }>()
);
export const deleteStaffDetailsSucess = createAction(
  '[Staff List] delete StaffListDetails Sucess',
  props<{ id: number | string }>()
);
export const deleteStaffDetailsFailure = createAction(
  '[Staff List] delete StaffListDetails Failure',
  props<{ error: string }>()
);
export const editStaffDetails = createAction(
  '[Staff List] edit StaffListDetails',
  props<{ id: string | number; staff: StaffDetails }>()
);
export const editStaffDetailsSucess = createAction(
  '[Staff List] edit StaffListDetails Sucess',
  props<{ id: string | number }>()
);
export const editStaffDetailsFailure = createAction(
  '[Staff List] edit StaffListDetails Failure',
  props<{ error: string }>()
);
