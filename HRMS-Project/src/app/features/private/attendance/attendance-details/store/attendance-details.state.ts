import { EmployeeAttendanceRecord } from "../../model/attendance-details.interface";

export interface AttendanceRequestPayload {
  record: EmployeeAttendanceRecord[];
  loading: boolean;
  error: string | null;
}

export const initialAttendanceState: AttendanceRequestPayload = {
  record: [],
  loading: false,
  error: null,
};
