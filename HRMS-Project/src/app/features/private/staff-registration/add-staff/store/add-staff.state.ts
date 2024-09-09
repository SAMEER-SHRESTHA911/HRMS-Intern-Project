import { GetEmployeeDetails, RegisterStaffPayload } from "../model/add-staff";

export interface StaffState {
  loading: boolean;
  error: string | null;
  staff: RegisterStaffPayload | null;
  staffDetails: GetEmployeeDetails | null;
}

export const initialState: StaffState = {
  loading: false,
  error: null,
  staff: null,
  staffDetails: null
};
