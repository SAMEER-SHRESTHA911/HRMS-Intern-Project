export interface LeaveApplyBody {
  employeeId?: number;
  leaveFrom: string;
  leaveTo: string;
  leaveType: number|string;
  dayLeave: number|string;
  leaveRequestStatus?: number;
  reasonForLeave: string;
}
export interface LeaveApplyResponse{
    result: number,
    message: string,
    data: LeaveApplyBody
}
export interface DayLeave {
  id: number;
  name:string;
}