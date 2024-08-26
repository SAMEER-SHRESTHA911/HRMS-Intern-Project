import { StaffList } from '../model/staff-list';

export interface StaffListState {
  staff: StaffList[];
  loading: boolean;
  error: string | null;
}

export const initialState: StaffListState = {
  staff: [],
  loading: false,
  error: null,
};
