import { Policy } from '../../models/policy.model';

export interface PolicyResponse {
  result: string;
  message: string;
  data: Policy[];
}

export interface PolicyState {
  policies: PolicyResponse | undefined;
  loading: boolean;
  error: string | null;
}

export const initialState: PolicyState = {
  policies: undefined,
  loading: false,
  error: null,
};
