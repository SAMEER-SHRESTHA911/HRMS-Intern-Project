import { AttendanceData, EmployeeAttendanceRecord } from "../../model/attendance-details.interface";

export interface AttendanceDetailsById {
  record: AttendanceData | undefined;
  loading: boolean;
  error: string | null;
}

export const initialAttendanceStateById: AttendanceDetailsById = {
  record: undefined,
  loading: false,
  error: null,
};
