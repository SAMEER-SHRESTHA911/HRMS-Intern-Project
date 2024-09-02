import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TodayAttendanceSummary } from '../../types/todays-attendance.interface';
import { Store } from '@ngrx/store';
import { TodayAttendanceSummaryState } from '../../store/todays-attendance/today-attendance.state';
import {
  selectAttendanceSummaryData,
  selectAttendanceSummaryError,
  selectAttendanceSummaryLoading,
} from '../../store/todays-attendance/today-attendance.selector';
import { FETCH_TODAY_ATTENDANCE_SUMMARY } from '../../store/todays-attendance/today-attendance.actions';

@Component({
  selector: 'app-todays-attendance',
  templateUrl: './todays-attendance.component.html',
  styleUrl: './todays-attendance.component.scss',
})
export class TodaysAttendanceComponent implements OnInit {
  attendanceSummary$: Observable<TodayAttendanceSummary[]> = of([]);
  loading$: Observable<boolean> = of(false);
  error$: Observable<string | null> = of(null);
  attendanceSummary: TodayAttendanceSummary[] = [];

  selectorInitilizer(): void {
    this.attendanceSummary$ = this.store.select(selectAttendanceSummaryData);
    this.loading$ = this.store.select(selectAttendanceSummaryLoading);
    this.error$ = this.store.select(selectAttendanceSummaryError);
  }
  constructor(private store: Store<TodayAttendanceSummaryState>) {}

  ngOnInit(): void {
    this.selectorInitilizer();
    this.store.dispatch(FETCH_TODAY_ATTENDANCE_SUMMARY());
    this.attendanceSummary$.subscribe((data) => {
      console.log('Attendance Summary in Component:', data);
    });
  }
}
