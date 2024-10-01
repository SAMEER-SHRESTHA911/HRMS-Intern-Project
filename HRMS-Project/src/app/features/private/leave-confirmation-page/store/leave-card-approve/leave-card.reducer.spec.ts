import { LEAVE_ACCEPT_REJECT, LEAVE_ACCEPT_REJECT_FAILURE, LEAVE_ACCEPT_REJECT_SUCCESS } from "./leave-card.action"
import { leaveAcceptRejectReducer } from "./leave-card.reducer"
import { initialState } from "./leave-card.state";

fdescribe('LeaveCardReducer', () => {
    const mockInitialState = {
        loading: true,
        error: null,
        response: null,
    } 
    const mockRepsonse = {
        message: 'string',
        result: 2,
        data : true
    }

    const mockId = 2;
    const mockError = "An error has occured";

    it('should handle LEAVE_ACCEPT_RTEJECT action and set loading to true', () => {
        const action = LEAVE_ACCEPT_REJECT({ id: mockId, option:2 });
        const state = leaveAcceptRejectReducer(initialState, action);
        expect(state).toEqual(mockInitialState)
    })

    it('should handle LEAVE_ACCEPT_REJECT action and ',() => {
        const action = LEAVE_ACCEPT_REJECT_FAILURE({ error: mockError})
        const state =  leaveAcceptRejectReducer(initialState, action);
        expect(state.error).toEqual(mockError);
    })

    it('should return the response data and should set loading to false', () => {
        const action = LEAVE_ACCEPT_REJECT_SUCCESS({ response : mockRepsonse});
        const state = leaveAcceptRejectReducer(initialState, action);
        expect(state.response).toEqual(mockRepsonse);
        expect(state.loading).toEqual(false);
    })
})