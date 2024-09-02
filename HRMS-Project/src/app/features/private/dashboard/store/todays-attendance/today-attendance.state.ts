import { TodayAttendanceSummary } from '../../types/todays-attendance.interface';

export interface TodayAttendanceSummaryState {
  attendanceData: TodayAttendanceSummary[];
  loading: boolean;
  error: string | null;
}

export const initialTodayAttendanceSummaryState: TodayAttendanceSummaryState = {
  attendanceData: [],
  loading: false,
  error: null,
};
