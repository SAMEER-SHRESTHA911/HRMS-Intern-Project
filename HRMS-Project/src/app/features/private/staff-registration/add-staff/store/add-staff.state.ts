import { StaffDetails } from '../model/add-staff';

export interface StaffState {
  staff: StaffDetails[];
  loading: boolean;
  error: string | null;
}

export const initialState: StaffState = {
  staff: [],
  loading: false,
  error: null,
};
