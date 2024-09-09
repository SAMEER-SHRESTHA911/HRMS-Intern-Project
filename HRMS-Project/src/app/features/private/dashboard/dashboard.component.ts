import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dashboard } from './types/leave-summary.interface';
import { Store } from '@ngrx/store';
import { DashboardState } from './store/dashboard/dashboard.state';
import { loadDashboard } from './store/dashboard/dashboard.actions';
import { DAY_DATA } from '@shared/utils/date-utils';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  chech$: Observable<Dashboard[]> = of([]);
  loading$: Observable<boolean> = of(false);
  error$: Observable<string | null> = of(null);
  today = DAY_DATA;
  userRole: string | null = localStorage.getItem('role');
  //"Admin" , "Employee"

  constructor(private store: Store<DashboardState>) {}

  selectorInitilizer(): void {}

  ngOnInit(): void {
    this.store.dispatch(loadDashboard());
    this.selectorInitilizer();
  }
}
