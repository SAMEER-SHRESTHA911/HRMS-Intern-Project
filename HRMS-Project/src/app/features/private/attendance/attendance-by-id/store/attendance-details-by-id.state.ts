import {
  AttendanceData,
  CalenderViewData,
  EmployeeAttendanceRecord,
} from '../../model/attendance-details.interface';

export interface AttendanceDetailsById {
  record: AttendanceData | undefined;
  calendarData: CalenderViewData[] | null;
  loading: boolean;
  error: string | null;
}

export const initialAttendanceStateById: AttendanceDetailsById = {
  record: undefined,
  calendarData: null,
  loading: false,
  error: null,
};
