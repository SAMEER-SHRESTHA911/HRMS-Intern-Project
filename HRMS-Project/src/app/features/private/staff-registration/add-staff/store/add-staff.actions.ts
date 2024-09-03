import { createAction, props } from '@ngrx/store';
import { RegisterStaffPayload } from '../model/add-staff';

export const addStaff = createAction(
  '[Staff] Add Staff',
  props<{ staff: RegisterStaffPayload }>()
);

export const addStaffSuccess = createAction(
  '[Staff] Add Staff Success',
);

export const addStaffFailure = createAction(
  '[Staff] Add Staff Failure',
  props<{ error: string }>()
);


export const fetchEmployeeData = createAction(
  '[Staff]Fetch Staff Data',
  props<{ staffId: number; }>()
);
export const fetchEmployeeDataSuccess = createAction(
  '[Staff] Fetch Staff Data Sucess',
);
export const fetchEmployeeDataFailure = createAction(
  '[Staff] Fetch Staff Data Failure',
  props<{ error: string }>()
);