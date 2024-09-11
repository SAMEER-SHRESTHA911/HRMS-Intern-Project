import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { LeaveStatsComponent } from './leave-stats.component';
import { FETCH_LEAVE_REQUESTS } from '../../store/leave-summary/leave-summary.actions';
import {
  selectAllUsersPendingLeaveRequestData,
  selectAllUsersPendingLeaveRequestDataLoading,
  selectAllUsersPendingLeaveRequestDataError,
} from '../../store/leave-summary/leave-summary.selectors';
import { of } from 'rxjs';

describe('LeaveStatsComponent', () => {
  let component: LeaveStatsComponent;
  let fixture: ComponentFixture<LeaveStatsComponent>;
  let store: MockStore;
  const initialState = {
    pendingLeaveRequests: [],
    loading: false,
    error: null,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeaveStatsComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(LeaveStatsComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize pending leave request data, loading, and error selectors', () => {
    // Mock selectors
    const mockPendingLeaveRequests = [
      {
        id: 1,
        employeeId: 1,
        employeeName: 'Ram',
        leaveType: '1',
        departmentId: 1,
        department: 'Software',
        phoneNumber: '9800000000',
        leaveFrom: '2024-09-09',
        leaveTo: '2024-09-11',
        dayLeave: '2',
        reasonForLeave: 'work',
        leaveRequestStatus: 'Pending',
        totalLeaveDuration: 2,
      },
      {
        id: 2,
        employeeId: 2,
        employeeName: 'Shyam',
        leaveType: '2',
        departmentId: 1,
        department: 'Software',
        phoneNumber: '9800000000',
        leaveFrom: '2024-09-09',
        leaveTo: '2024-09-11',
        dayLeave: '2',
        reasonForLeave: 'work',
        leaveRequestStatus: 'Approved',
        totalLeaveDuration: 2,
      },
    ];

    store.overrideSelector(
      selectAllUsersPendingLeaveRequestData,
      mockPendingLeaveRequests
    );
    store.overrideSelector(selectAllUsersPendingLeaveRequestDataLoading, false);
    store.overrideSelector(selectAllUsersPendingLeaveRequestDataError, null);

    // Call ngOnInit
    component.ngOnInit();

    // Test pendingLeaveRequestData$
    component.pendingLeaveRequestData$.subscribe((requests) => {
      expect(requests.length).toBe(2);
      expect(requests[0].leaveRequestStatus).toBe('Pending');
    });

    // Test loading$
    component.loading$.subscribe((loading) => {
      expect(loading).toBeFalse();
    });

    // Test error$
    component.error$.subscribe((error) => {
      expect(error).toBeNull();
    });
  });

  it('should calculate the correct pending leave count', () => {
    const mockPendingLeaveRequests = [
      {
        id: 1,
        employeeId: 1,
        employeeName: 'Ram',
        leaveType: '1',
        departmentId: 1,
        department: 'Software',
        phoneNumber: '9800000000',
        leaveFrom: '2024-09-09',
        leaveTo: '2024-09-11',
        dayLeave: '2',
        reasonForLeave: 'work',
        leaveRequestStatus: 'Pending',
        totalLeaveDuration: 2,
      },
      {
        id: 2,
        employeeId: 2,
        employeeName: 'Shyam',
        leaveType: '2',
        departmentId: 1,
        department: 'Software',
        phoneNumber: '9800000000',
        leaveFrom: '2024-09-09',
        leaveTo: '2024-09-11',
        dayLeave: '2',
        reasonForLeave: 'work',
        leaveRequestStatus: 'Approved',
        totalLeaveDuration: 2,
      },
    ];

    component.pendingLeaveRequestData$ = of(mockPendingLeaveRequests);

    // Test pendingLeaveCount$
    component.pendingLeaveCount$.subscribe((pendingCount) => {
      expect(pendingCount).toBe(1); // Should only count the 'Pending' requests
    });
  });

  it('should dispatch FETCH_LEAVE_REQUESTS on initialization', () => {
    spyOn(store, 'dispatch'); // Spy on the store's dispatch method

    // Call ngOnInit
    component.ngOnInit();

    // Check that FETCH_LEAVE_REQUESTS action is dispatched
    expect(store.dispatch).toHaveBeenCalledWith(FETCH_LEAVE_REQUESTS());
  });
});
