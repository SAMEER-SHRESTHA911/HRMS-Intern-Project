import { createAction, props } from '@ngrx/store';
import { Policy as AddPolicy } from '../../models/policy.model';
import { PolicyResponse } from './policy-list.state';

export const loadPolicies = createAction('[Policy] Load Policies');
export const loadPoliciesSuccess = createAction(
  '[Policy] Load Policies Success',
  props<{ policies: PolicyResponse }>()
);
export const loadPoliciesFailure = createAction(
  '[Policy] Load Policies Failure',
  props<{ error: string }>()
);

export const addPolicy = createAction(
  '[Policy] Add Policy',
  props<{ policy: AddPolicy }>()
);
export const addPolicySuccess = createAction(
  '[Policy] Add Policy Success',
  props<{ policy: AddPolicy }>()
);
export const addPolicyFailure = createAction(
  '[Policy] Add Policy Failure',
  props<{ error: string }>()
);

export const editPolicy = createAction(
  '[Policy] Edit Policy',
  props<{ policy: AddPolicy }>()
);
export const editPolicySuccess = createAction(
  '[Policy] Edit Policy Success',
  props<{ response: any }>() //successResponseAPI
);
export const editPolicyFailure = createAction(
  '[Policy] Edit Policy Failure',
  props<{ error: string }>()
);

export const deletePolicy = createAction(
  '[Policy] Delete Policy',
  props<{ id: number }>()
);
export const deletePolicySuccess = createAction(
  '[Policy] Delete Policy Success',
  props<{ id: number }>()
);
export const deletePolicyFailure = createAction(
  '[Policy] Delete Policy Failure',
  props<{ error: string }>()
);
