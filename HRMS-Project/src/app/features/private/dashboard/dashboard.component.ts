import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  Dashboard,
  EmployeeLeaveListResponse,
} from './types/leave-summary.interface';
import { Store } from '@ngrx/store';
import { DashboardState } from './store/dashboard/dashboard.state';
import { selectDashboard } from './store/dashboard/dashboard.selector';
import { loadDashboard } from './store/dashboard/dashboard.actions';
import { LeaveSummaryService } from './services/leave-summary/leave-summary.service';
import { DAY_DATA } from '../../../shared/utils/date-today';
import { ResponseType } from '../../../shared/models/response.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  dashboard$: Observable<Dashboard[]> = of([]);
  loading$: Observable<boolean> = of(false);
  error$: Observable<string | null> = of(null);
  today = DAY_DATA;
  constructor(
    private leaveServiceSid: LeaveSummaryService,
    private store: Store<DashboardState>
  ) {}

  selectorInitilizer(): void {
    this.dashboard$ = this.store.select(selectDashboard);
    // this.dashboard$.subscribe((data) => console.log(data));
  }

  ngOnInit(): void {
    this.store.dispatch(loadDashboard());
    this.selectorInitilizer();
    this.leaveServiceSid.getStaffsOnLeaveToday(this.today).subscribe({
      next: (response: ResponseType<EmployeeLeaveListResponse[]>) => {
        // Handle successful response
        console.log('Data received:', response);
      },
      error: (error) => {
        // Handle error response
        console.error('Error fetching data:', error);
      },
    });
  }
}
