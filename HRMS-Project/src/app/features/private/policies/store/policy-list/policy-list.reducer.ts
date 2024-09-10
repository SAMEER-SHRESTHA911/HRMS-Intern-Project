import { createReducer, on } from '@ngrx/store';
import { initialState, PolicyState } from './policy-list.state';
import * as PolicyActions from './policy-list.action';

export const policyReducer = createReducer(
  initialState,
  on(PolicyActions.loadPolicies, (state)=> ({
    ...state,
    loading:true,
    error:null,
  })),

  on(PolicyActions.loadPoliciesSuccess, (state, { policies }) => ({
    ...state,
    policies,

    error: null,
  })),
  on(PolicyActions.loadPoliciesFailure, (state, { error }) => ({
    ...state,
    error,
  })),


  on(PolicyActions.addPolicySuccess, (state, { policy }) => ({
    ...state,
    // policies: [...state.policies, policy],
    error: null,
  })),
  on(PolicyActions.addPolicyFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(PolicyActions.editPolicySuccess, (state, { response: policy }) => ({
    ...state,
    // policies: state.policies.map(p => p.id === policy.id ? policy : p),
    error: null,
  })),
  on(PolicyActions.editPolicyFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(PolicyActions.deletePolicySuccess, (state, { id }) => ({
    ...state,
    // policies: state.policies.filter(p => p.id !== id),
    error: null,
  })),
  on(PolicyActions.deletePolicyFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
