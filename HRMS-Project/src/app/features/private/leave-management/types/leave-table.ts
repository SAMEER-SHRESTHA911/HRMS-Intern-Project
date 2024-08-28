export interface LeaveTableData {
  leaveFrom: string;
  leaveTo: string;
  leaveType: string;
  dayLeave: string;
  reasonForLeave: string;
  leaveRequestStatus: string;
  id?: number;
  employeeId?: number;
  employeeName?: string;
  departmentId?: number;
  department?: string;
  phoneNumber?: string;
  totalLeaveDuration?: number;
}

export interface LeaveTableResponse {
  result: number;
  message: string;
  data: {
    skip: number;
    take: number;
    count: number;
    employeeLeaveRequestResponse: LeaveTableData[];
  };
}

export interface LeaveAvailableData {
  totalLeaveTaken: number;
  totalLeaveAvailable: number;
  annualLeaveAvailable: number;
  sickLeaveAvailable: number;
  otherLeaveAvailable: number;
  id?: string;
}
export interface LeaveRequestList {
  id: string;
  reason: string;
  leaveFrom: string;
  leaveTo: string;
  status: string;
  name: string;
  daysLeft: string;
  employeeId: string;
}
