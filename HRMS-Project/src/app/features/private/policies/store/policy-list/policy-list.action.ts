import { createAction, props } from '@ngrx/store';
import { Policy } from '../../models/policy.model';

export const loadPolicies = createAction('[Policy List] Load Policies');
export const loadPoliciesSuccess = createAction('[Policy List] Load Policies Success',props<{ policies: Policy[] }>());
export const loadPoliciesFailure = createAction('[Policy List] Load Policies Failure',props<{ error: string }>());

export const addPolicy = createAction('[Policy List] Add Policy',props<{ policy: Policy }>());
export const addPolicySuccess = createAction('[Policy List] Add Policy Success',props<{ policy: Policy }>());
export const addPolicyFailure = createAction('[Policy List] Add Policy Failure',props<{ error: string }>());

export const editPolicy = createAction('[Policy List] Edit Policy',props<{ policy: Policy }>());
export const editPolicySuccess = createAction('[Policy List] Edit Policy Success',props<{ policy: Policy }>());
export const editPolicyFailure = createAction('[Policy List] Edit Policy Failure',props<{ error: string }>());

export const deletePolicy = createAction('[Policy List] Delete Policy',props<{ id: number }>());
export const deletePolicySuccess = createAction('[Policy List] Delete Policy Success',props<{ id: number }>());
export const deletePolicyFailure = createAction('[Policy List] Delete Policy Failure',props<{ error: string }>());
