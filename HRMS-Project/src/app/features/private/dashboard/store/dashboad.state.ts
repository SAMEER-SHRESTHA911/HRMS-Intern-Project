import { Dashboard } from '../types/dashboard.interface';

export interface DashboardState {
  dashboard: Dashboard[];
  loading: boolean;
  error: string | null;
}

export const initialState: DashboardState = {
  dashboard: [],
  loading: false,
  error: null,
};
