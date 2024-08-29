export interface DayLeaveState {
    dayLeaveDropdown : DayLeaveDropdown[];
    loading: boolean;
    error:  string|null;

}
export interface DayLeaveDropdown{
    key: number;
    value : string;
}
export const initialState : DayLeaveState= {
    dayLeaveDropdown : [],
    loading: false,
    error: null
}
export interface DayLeaveDropDownResponse{
    result: number;
    message : string;
    data : DayLeaveDropdown[];
}