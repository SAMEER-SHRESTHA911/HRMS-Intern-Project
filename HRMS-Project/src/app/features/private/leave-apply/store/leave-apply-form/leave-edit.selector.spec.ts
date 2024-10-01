import { TestBed } from '@angular/core/testing';
import { IEditLeaveEdit } from './leave-edit.state';
import { selectLeaveEditData, selectLeaveEditState, selectLeaveError, selectLeaveLoading } from './leave-edit.selector';
import { select } from '@ngrx/store';

fdescribe('LeaveEditSelector', () => {
  const mockState: IEditLeaveEdit = {
    leaveEditData: {
      employeeId: 1,
      leaveFrom: '2024-09-20',
      leaveTo: '2024-09-22',
      leaveType: 2,
      dayLeave: 3,
      reasonForLeave: 'Medical Checkup',
    },
    loading: false,
    error: null,
  };

  describe('selectEditLeaveState', () => {
    it('should select the load edit state', () => {
        const result = selectLeaveEditState.projector(mockState);
        expect(result).toEqual(mockState);
    })
  })

  describe('selectEditLeaveData', () => {
    it('should select the leaveEditData', () => {
        const result =  selectLeaveEditData.projector(mockState);
        expect(result).toEqual(mockState.leaveEditData);
    })
  })

  describe('selectEditLeaveLoading', () => {
    it('should select the loader', () => {
        const loading = selectLeaveLoading.projector(mockState);
        expect(loading).toBeFalse();
    })
  })
  
  describe('selectEditLeaveError', () => {
    it('should return null as result for error', () => {
        const error = selectLeaveError.projector(mockState);
        expect(error).toBeNull();
    })
  })
});
