import {
  LeaveRequests,
  LeaveStatus,
} from '../../types/leave-summary.interface';

export interface AllUsersPendingLeaveRequestState {
  pendingLeaveRequestData: LeaveRequests[];
  loading: boolean;
  error: string | null;
}

export const initialAllUsersPendingLeaveRequestState: AllUsersPendingLeaveRequestState =
  {
    pendingLeaveRequestData: [],
    loading: false,
    error: null,
  };

export interface EmployeeOnLeaveToday {
  employeeOnLeaveToday: LeaveStatus[];
  loading: boolean;
  error: string | null;
}

export const initialEmployeeOnLeaveToday: EmployeeOnLeaveToday = {
  employeeOnLeaveToday: [],
  loading: false,
  error: null,
};
