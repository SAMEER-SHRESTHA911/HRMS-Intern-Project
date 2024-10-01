import { LeaveState } from "./leave.reducer"
import { selectLeaveData, selectLeaveState, selectLoading, selectError } from "./leave.selector"

fdescribe('LeaveSelector', () => {

    const mockResponse: LeaveState = {
        leaveData: [
            {
                employeeId: 1,
                leaveFrom: '2024-09-22',
                leaveTo: '2024-09-24',
                leaveType: 3,
                dayLeave: 3,
                leaveRequestStatus: 3,
                reasonForLeave: 'Medical Checkup'
            }
        ],
        loading: false,
        error: null
    }

    it('should load the initial state', () => {
        const result = selectLeaveState.projector(mockResponse);
        expect(result).toEqual(mockResponse);
    })

    it('should select the data', () => {
        const result = selectLeaveData.projector(mockResponse);
        expect(result).toEqual(mockResponse.leaveData)
    })

    it('should select loading', () => {
        const loading = selectLoading.projector(mockResponse);
        expect(loading).toEqual(mockResponse.loading)
    })

    it('should select error', () => {
        const error = selectError.projector(mockResponse);
        expect(error).toBeNull();
    })
})