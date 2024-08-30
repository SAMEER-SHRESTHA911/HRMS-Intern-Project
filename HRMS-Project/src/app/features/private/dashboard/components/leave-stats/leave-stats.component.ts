import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Dashboard } from '../../types/dashboard.interface';
import { selectDashboard } from '../../store/dashboard/dashboard.selector';
import { loadDashboard } from '../../store/dashboard/dashboard.actions';
import { DashboardState } from '../../store/dashboard/dashboard.state';

@Component({
  selector: 'app-leave-stats',
  templateUrl: './leave-stats.component.html',
  styleUrl: './leave-stats.component.scss',
})
export class LeaveStatsComponent {
  dashboard$: Observable<Dashboard[]> = of([]);
  loading$: Observable<boolean> = of(false);
  error$: Observable<string | null> = of(null);
  constructor(private store: Store<DashboardState>) {}

  selectorInitilizer(): void {
    this.dashboard$ = this.store.select(selectDashboard);
  }
  ngOnInit(): void {
    this.store.dispatch(loadDashboard());
    this.selectorInitilizer();
  }
}
