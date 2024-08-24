import { createReducer, on } from "@ngrx/store";
import { initialState } from "./leave-available.state";
import { FETCH_AVAILABLE_LEAVE_DATA, FETCH_AVAILABLE_LEAVE_DATA_FAILURE, FETCH_AVAILABLE_LEAVE_DATA_SUCCESS } from "./leave-available.actions";

export const LeaveAvailableReducer = createReducer(
    initialState,
    on(FETCH_AVAILABLE_LEAVE_DATA, (state) => {
        return {
            ...state,
            loading: true,
            error: null
        }
    }),
    on(FETCH_AVAILABLE_LEAVE_DATA_SUCCESS, (state, { availableLeaveData }) => {
        return {
            ...state,
            availableData : availableLeaveData,
            loading: false,
            error: null
        }
    }),
    on(FETCH_AVAILABLE_LEAVE_DATA_FAILURE, (state, { error }) => ({
            ...state,
            loading: false,
            error: error,
        })
    )
)