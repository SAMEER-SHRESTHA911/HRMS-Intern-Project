import { createReducer, on } from '@ngrx/store';
import {
  loadPolicies, loadPoliciesSuccess, loadPoliciesFailure,
  addPolicySuccess, editPolicySuccess, deletePolicySuccess
} from './policy-list.action';
import { Policy } from '../../models/policy.model';

export interface PolicyState {
  policies: Policy[];
  error: string | null;
  loading: boolean;
}

export const initialState: PolicyState = {
  policies: [],
  error: null,
  loading: false,
};

export const policyReducer = createReducer(
  initialState,

  // Load Policies
  on(loadPolicies, state => ({
    ...state,
    loading: true,
  })),
  on(loadPoliciesSuccess, (state, { policies }) => ({
    ...state,
    loading: false,
    policies,
  })),
  on(loadPoliciesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Add Policy
  on(addPolicySuccess, (state, { policy }) => ({
    ...state,
    policies: [...state.policies, policy]
  })),

  // Edit Policy
  on(editPolicySuccess, (state, { policy }) => ({
    ...state,
    policies: state.policies.map(p =>
      // Ensure both 'p.id' and 'policy.id' are numbers before comparing
      Number(p.id) === Number(policy.id) ? policy : p
    )
  })),

  // Delete Policy
  on(deletePolicySuccess, (state, { id }) => ({
    ...state,
    policies: state.policies.filter(p =>
      // Convert 'p.id' and 'id' to numbers before comparison
      Number(p.id) !== Number(id)
    )
  }))
);
