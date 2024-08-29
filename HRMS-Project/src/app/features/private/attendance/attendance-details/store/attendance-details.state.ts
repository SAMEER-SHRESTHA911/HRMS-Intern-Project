import { AttendanceRecord } from '../../model/attendance-details.interface';

export interface AttendanceState {
  records: AttendanceRecord[];
  loading: boolean;
  error: string | null;
}

export const initialAttendanceState: AttendanceState = {
  records: [],
  loading: false,
  error: null,
};
