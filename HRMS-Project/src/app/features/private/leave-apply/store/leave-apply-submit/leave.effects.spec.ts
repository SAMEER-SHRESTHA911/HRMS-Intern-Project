import { Observable } from "rxjs"
import { LeaveEffects } from "./leave.effects";
import { LeaveApplyApiService } from "../../services/api/leave-api.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { TestBed } from "@angular/core/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { submitLeaveForm, submitLeaveFormSuccess } from "./leave.actions";
import { cold, hot } from "jasmine-marbles";

describe('LeaveEffects', () => {
    let action$: Observable<any>;
    let effects: LeaveEffects;
    let leaveApplyApiService: jasmine.SpyObj<LeaveApplyApiService>;
    let snackBar: jasmine.SpyObj<MatSnackBar>;

    const mockResponse = {
        employeeId: 2,
        leaveFrom: '2024-09-20',
        leaveTo: '2024-09-22',
        leaveType: 2,
        dayLeave: 2,
        leaveRequestStatus: 3,
        reasonForLeave: 'Medical Report'
    }

    beforeEach(() => {
        const LeaveApplyApiServiceSpy = jasmine.createSpyObj('LeaveApplyApiService', ['addLeaveRequest']);
        const snackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);

        TestBed.configureTestingModule({
            providers: [ LeaveEffects,
                provideMockActions(() => action$),
                {
                    provide : LeaveApplyApiService,
                    useValue : LeaveApplyApiServiceSpy,
                },
                {
                    provide : MatSnackBar,
                    useValue : snackBarSpy
                },
            ]
        });

        effects = TestBed.inject(LeaveEffects);
        leaveApplyApiService = TestBed.inject(LeaveApplyApiService) as jasmine.SpyObj<LeaveApplyApiService>;
        snackBar = TestBed.inject(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
    });

    it('should disaptch submitLeaveFormSuccess on succesful data fetch', () => {
        const action = submitLeaveForm({ leaveData : mockResponse });
        const successAction = submitLeaveFormSuccess({ leaveData : mockResponse});
        
        action$ = hot('-a', { a: action });
        leaveApplyApiService.addLeaveRequest.and.returnValue(cold('-b'));
    })

})