import { LeaveApplyBody, LeaveApplyResponse } from "../../types/leave-apply"
import { GET_EDIT_LEAVE_DATA, GET_EDIT_LEAVE_DATA_FAILURE, GET_EDIT_LEAVE_DATA_SUCCESS } from "./leave-edit.action";
import { LeaveEditReducer } from "./leave-edit.reducer";
import { initialState } from "./leave-edit.state";

fdescribe('LeaveEditReducer', () => {
    const mockLeaveApplyBody : LeaveApplyBody = {
        employeeId : 1,
        leaveFrom : '2024-09-18',
        leaveTo : '2024-09-20',
        leaveType: 1,
        dayLeave : 3,
        reasonForLeave : 'Medical Checkup'
    };

    const mockLeaveApplyResponse : LeaveApplyResponse = {
        message :  'Leave Applied Successfully',
        result : 200,
        data: mockLeaveApplyBody,
    }

    const mockError = 'Failed to load leave edit data';

    it('should return intial state', () => {
        const action = { type: 'Unknown'} as any;
        const state = LeaveEditReducer(initialState, action);

        expect(state).toBe(initialState);
    })

    it('should set loading to true and error to null on GET_EDIT_LEAVE_DATA', () => {
        const action = GET_EDIT_LEAVE_DATA({ id : '1'});
        const state = LeaveEditReducer(initialState, action);
    
        expect(state).toEqual({
            ...initialState,
            loading: true,
            error: null,
        })
    })

    it('should return the load edit data', () => {
        const action = GET_EDIT_LEAVE_DATA_SUCCESS({ editLeaveData: mockLeaveApplyResponse });
        const state = LeaveEditReducer(initialState, action);

        expect(state).toEqual({
            ...initialState,
            loading: false,
            error: null,
            leaveEditData : mockLeaveApplyBody
        })
    })

    it('should return the error', () => {
        const action = GET_EDIT_LEAVE_DATA_FAILURE({ error: mockError});
        const state = LeaveEditReducer(initialState, action);

        expect(state).toEqual({
            ...initialState,
            loading: false,
            error: mockError
        })
    })
    
})