import { LeaveAvailableData } from "../../types/leave-table";

export interface LeaveAvailableState {
    availableData : LeaveAvailableData;
    loading : boolean;
    error : string|null;
}

export const initialState : LeaveAvailableState  = {
    availableData : {
        totalLeaveTaken : 0,
    totalLeaveAvailable : 0,
    annualLeaveAvailable : 0,
    sickLeaveAvailable : 0,
    otherLeaveAvailable : 0,
    },
    loading: false,
    error: null,
}