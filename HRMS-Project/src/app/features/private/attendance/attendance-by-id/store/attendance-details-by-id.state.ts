import { EmployeeByIdData } from "../../model/attendance-details.interface";

export interface AttendanceDetailsById {
  record: EmployeeByIdData | undefined;
  loading: boolean;
  error: string | null;
}

export const initialAttendanceStateById: AttendanceDetailsById = {
  record: undefined,
  loading: false,
  error: null,
};
