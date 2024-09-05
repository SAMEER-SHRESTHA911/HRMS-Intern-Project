
export interface AttendanceRequestPayload {
  departmentId: number;
  employeeId: number;
  startDate: string;
  endDate: string;
  workLocation: number;
  skip: number;
  take: number;
  sort: {
    key: string;
    sortBy: string;
  }
}
export interface EmployeeAttendanceRecord {
  id: number;
  employeeId: number;
  departmentId: number;
  checkIn: string;
  checkInReason: string;
  checkOut: string;
  checkOutReason: string;
  workingHour: number;
  workLocation: number;
  employeeName: string;
  departmentName: string;
}


export interface AttendanceData {
  count: number;
  take: number;
  skip: number;
  data: EmployeeAttendanceRecord[];
}