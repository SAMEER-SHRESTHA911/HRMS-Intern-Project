import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardState } from './dashboad.state';

export const dashboardDataState =
  createFeatureSelector<DashboardState>('dashboard');

export const dashboard = createSelector(
  dashboardDataState,
  (state: DashboardState) => state.dashboard
);

export const dashboardDataLoading = createSelector(
  dashboardDataState,
  (state: DashboardState) => state.loading
);
export const dashboadDataError = createSelector(
  dashboardDataState,
  (state: DashboardState) => state.error
);
