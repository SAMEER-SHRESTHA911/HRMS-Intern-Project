export interface AttendanceRecord {
  SN: number;
  Name: string;
  CheckedInTime: string;
  CheckedInStatus: string;
  CheckedOutTime: string;
  CheckedOutStatus: string;
  PresentAbsent: string;
  WorkedHours: number;
  Actions: string;
}
// make the test camelCase
