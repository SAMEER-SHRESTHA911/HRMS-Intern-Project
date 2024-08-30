import { createAction, props } from '@ngrx/store';
import { StaffDetails } from '../model/add-staff';

export const addStaff = createAction(
  '[Staff] Add Staff',
  props<{ staff: StaffDetails }>()
);

export const addStaffSuccess = createAction(
  '[Staff] Add Staff Success',
  props<{ staff: StaffDetails }>()
);

export const addStaffFailure = createAction(
  '[Staff] Add Staff Failure',
  props<{ error: string }>()
);
