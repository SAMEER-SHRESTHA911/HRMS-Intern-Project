import {
  selectAllUsersPendingLeaveRequestDataLoading,
  selectAllUsersPendingLeaveRequestDataError,
} from './../../store/leave-summary/leave-summary.selectors';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import { LeaveRequests } from '../../types/leave-summary.interface';
import { AllUsersPendingLeaveRequestState } from '../../store/leave-summary/leave-summary.state';
import { selectAllUsersPendingLeaveRequestData } from '../../store/leave-summary/leave-summary.selectors';
import { FETCH_LEAVE_REQUESTS } from '../../store/leave-summary/leave-summary.actions';

@Component({
  selector: 'app-leave-stats',
  templateUrl: './leave-stats.component.html',
  styleUrl: './leave-stats.component.scss',
})
export class LeaveStatsComponent {
  userRole: string = 'admin';
  pendingLeaveRequestData$: Observable<LeaveRequests[]> = of([]);
  loading$: Observable<boolean> = of(false);
  error$: Observable<string | null> = of(null);
  constructor(private store: Store<AllUsersPendingLeaveRequestState>) {}

  selectorInitilizer(): void {
    this.pendingLeaveRequestData$ = this.store.select(
      selectAllUsersPendingLeaveRequestData
    );
    this.loading$ = this.store.select(
      selectAllUsersPendingLeaveRequestDataLoading
    );
    this.error$ = this.store.select(selectAllUsersPendingLeaveRequestDataError);
  }
  ngOnInit(): void {
    this.selectorInitilizer();
    this.store.dispatch(FETCH_LEAVE_REQUESTS());
  }
  get pendingLeaveCount$(): Observable<number> {
    return this.pendingLeaveRequestData$.pipe(
      map(
        (item) =>
          item.filter((data) => data.leaveRequestStatus === 'Pending').length
      )
    );
  }
}
