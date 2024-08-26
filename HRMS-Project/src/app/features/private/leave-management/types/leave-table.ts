
export interface LeaveTableData{
    leaveFrom: string,
    leaveTo: string,
    leaveType: string,
    dayLeave: string,
    reasonForLeave : string,
    leaveRequestStatus : string
    id?:number;
}

export interface LeaveAvailableData {
    totalLeaveTaken : number,
    totalLeaveAvailable : number,
    annualLeaveAvailable : number,
    sickLeaveAvailable : number,
    otherLeaveAvailable : number,
    id?: string
}