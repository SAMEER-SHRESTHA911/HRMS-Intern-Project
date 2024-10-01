import { Observable } from 'rxjs';
import { LeaveEditEffect } from './leave-edit.effects';
import { LeaveFormService } from '../../services/form/leave-form.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LeaveApplyResponse } from '../../types/leave-apply';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { GET_EDIT_LEAVE_DATA, GET_EDIT_LEAVE_DATA_FAILURE, GET_EDIT_LEAVE_DATA_SUCCESS } from './leave-edit.action';
import { hot, cold } from 'jasmine-marbles';

fdescribe('LeaveEditEffect', () => {
  let actions$: Observable<any>;
  let effects: LeaveEditEffect;
  let leaveFormService: jasmine.SpyObj<LeaveFormService>;
  let snackBar: jasmine.SpyObj<MatSnackBar>;

  const mockLeaveApplyResponse: LeaveApplyResponse = {
    message: 'Leave Applied Successfully',
    result: 1,
    data: {
      employeeId: 1,
      leaveFrom: '2024-09-20',
      leaveTo: '2024-09-22',
      leaveType: 2,
      dayLeave: 3,
      reasonForLeave: 'Medical Checkup',
    },
  };

  beforeEach(() => {
    const LeaveFormServiceSpy = jasmine.createSpyObj('LeaveFormService', [
      'fetchEditLeaveData',
    ]);
    const snackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);

    TestBed.configureTestingModule({
      providers: [
        LeaveEditEffect,
        provideMockActions(() => actions$),
        {
          provide: LeaveFormService,
          useValue: LeaveFormServiceSpy,
        },
        {
            provide: MatSnackBar,
            useValue: snackBarSpy
        },
      ],
    });

    effects = TestBed.inject(LeaveEditEffect);
    leaveFormService = TestBed.inject(LeaveFormService) as jasmine.SpyObj<LeaveFormService>;
    snackBar = TestBed.inject(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
  });

  it('should dispatch GET_EDIT_LEAVE_DATA_SUCCCESS on successful data fetch', () => {
    const action = GET_EDIT_LEAVE_DATA({ id: '1'});
    const successAction = GET_EDIT_LEAVE_DATA_SUCCESS({ editLeaveData : mockLeaveApplyResponse});

    actions$ = hot('-a', { a: action });
    leaveFormService.fetchEditLeaveData.and.returnValue(cold('-b', { b: mockLeaveApplyResponse}));

    const expected = cold('--c', { c:successAction});
    expect(effects.fetchEditLeaveData$).toBeObservable(expected);
  });

  it('should dispatch GET_EDIT_LEAVE_DATA_FAILURE on unsuccessful data fetch', () => {
    const action = GET_EDIT_LEAVE_DATA({ id: '1'});
    const error =  'Error fetching data';
    const failureAction = GET_EDIT_LEAVE_DATA_FAILURE({  error });

    actions$ = hot('-a', { a:action });
    leaveFormService.fetchEditLeaveData.and.returnValue(cold('-#', {}, error));

    const expected = cold('--c', { c: failureAction});

    expect(effects.fetchEditLeaveData$).toBeObservable(expected);

  })
});


