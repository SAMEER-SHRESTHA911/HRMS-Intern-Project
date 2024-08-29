import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dashboard } from './types/dashboard.interface';
import { Store } from '@ngrx/store';
import { DashboardState } from './store/dashboad.state';
import { selectDashboard } from './store/dashboard.selector';
import { loadDashboard } from './store/dashboard.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  dashboard$: Observable<Dashboard[]> = of([]);
  loading$: Observable<boolean> = of(false);
  error$: Observable<string | null> = of(null);
  constructor(private store: Store<DashboardState>) {}

  selectorInitilizer(): void {
    this.dashboard$ = this.store.select(selectDashboard);
    // this.dashboard$.subscribe((data) => console.log(data));
  }

  ngOnInit(): void {
    this.store.dispatch(loadDashboard());
    this.selectorInitilizer();
  }
}
