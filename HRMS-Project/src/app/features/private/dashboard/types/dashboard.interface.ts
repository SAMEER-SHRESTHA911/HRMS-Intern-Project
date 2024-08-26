interface Staff {
  name: string;
  department: string;
  image: string;
}

interface LeaveRequests {
  total: number;
  staffs: Staff[];
}

export interface Dashboard {
  user: number;
  totalCheckedIn: number;
  totalOfficeCheckedIn: number;
  totalWorkingFromHome: number;
  leaveRequests: LeaveRequests;
  staffsOnLeaveToday: LeaveRequests;
  staffsOnLeaveTomorrow: LeaveRequests;
  id?: string;
}
