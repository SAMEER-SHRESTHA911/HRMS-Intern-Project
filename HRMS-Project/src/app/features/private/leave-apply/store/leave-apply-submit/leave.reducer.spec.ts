import { submitLeaveForm, submitLeaveFormFail, submitLeaveFormSuccess } from "./leave.actions";
import { initialState, leaveReducer, LeaveState } from "./leave.reducer"

fdescribe('LeaveReducer', () => {
    const mockResponse = {
        leaveData: 
            {
                employeeId: 1,
                leaveFrom: '2024-09-22',
                leaveTo: '2024-09-24',
                leaveType: 3,
                dayLeave: 3,
                leaveRequestStatus: 3,
                reasonForLeave: 'Medical Checkup'
            },
        loading: false,
        error: null
    }

    const mockError = 'Error';

    it('should return initial state', () => {
        const action = { type: 'Unknown'} as any;
        const state = leaveReducer(initialState, action );

        expect(state).toBe(initialState);
    })

    it('should set loading to true and error to null on action dispatch', () => {
        const action = submitLeaveForm({ leaveData : mockResponse.leaveData});
        const state = leaveReducer(initialState, action);

        expect(state).toEqual({
            ...initialState,
            loading: true,
            error: null,
        })
    })

    it('should return the loading', () => {
        const action = submitLeaveFormSuccess({ leaveData : mockResponse.leaveData});
        const state = leaveReducer(initialState,action);

        expect(state).toEqual({
            ...initialState,
            loading:false,
            error: null,
            leaveData:  [ mockResponse.leaveData ]
        })
    })

    it('should return the error', () => {
        const action = submitLeaveFormFail({ error : mockError });
        const state = leaveReducer(initialState, action);

        expect(state).toEqual({
            ...initialState,
            loading: false,
            error: mockError
        })
    })

})