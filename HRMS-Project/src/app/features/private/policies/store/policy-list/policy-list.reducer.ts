import { createReducer, on } from '@ngrx/store';
import * as PolicyActions from './policy-list.action';

export interface PolicyState {
  policies: any[];
  loading: boolean;
  error: any;
}

export const initialState: PolicyState = {
  policies: [],
  loading: false,
  error: null,
};

export const policyReducer = createReducer(
  initialState,
  on(PolicyActions.loadPolicies, state =>
    ({ ...state, loading: true })),

  on(PolicyActions.loadPoliciesSuccess, (state, { policies }) =>
    ({ ...state, loading: false, policies })),

  on(PolicyActions.loadPoliciesFailure, (state, { error }) =>
    ({ ...state, loading: false, error })),

  on(PolicyActions.addPolicySuccess, (state, { policy }) =>
    ({ ...state, policies: [...state.policies, policy] })),

  on(PolicyActions.updatePolicySuccess, (state, { policy }) =>
    ({...state,policies: state.policies.map(p => p.id === policy.id ? policy : p)})),

  on(PolicyActions.deletePolicySuccess, (state, { id }) =>
    ({...state,policies: state.policies.filter(policy => policy.id !== id)})),

  on(PolicyActions.addPolicyFailure, PolicyActions.updatePolicyFailure, PolicyActions.deletePolicyFailure,
    (state, { error }) =>({ ...state, error })),
);
