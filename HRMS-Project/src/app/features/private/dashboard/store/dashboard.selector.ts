import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardState } from './dashboad.state';

export const dashboardDataState =
  createFeatureSelector<DashboardState>('dashboard');

export const selectDashboard = createSelector(
  dashboardDataState,
  (state: DashboardState) => state.dashboard
);

export const selectDashboardDataLoading = createSelector(
  dashboardDataState,
  (state: DashboardState) => state.loading
);
export const selectDashboadDataError = createSelector(
  dashboardDataState,
  (state: DashboardState) => state.error
);
