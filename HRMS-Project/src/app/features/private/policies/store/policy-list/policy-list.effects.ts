import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PolicyService } from '../../service/policy.service';
import * as PolicyActions from './policy-list.action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class PolicyEffects {
  loadPolicies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PolicyActions.loadPolicies),
      mergeMap(() =>
        this.policyService.getPolicies().pipe(
          map((policies) => PolicyActions.loadPoliciesSuccess({ policies })),
          catchError((error) =>
            of(PolicyActions.loadPoliciesFailure({ error }))
          )
        )
      )
    )
  );

  addPolicy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PolicyActions.addPolicy),
      mergeMap((action) =>
        this.policyService.addPolicy(action.policy).pipe(
          map((policy) => PolicyActions.addPolicySuccess({ policy })),
          catchError((error) => of(PolicyActions.addPolicyFailure({ error })))
        )
      )
    )
  );

  editPolicy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PolicyActions.editPolicy),
      mergeMap((action) =>
        this.policyService.editPolicy(action.policy).pipe(
          map((policy) =>
            PolicyActions.editPolicySuccess({ response: policy })
          ),
          catchError((error) => of(PolicyActions.editPolicyFailure({ error })))
        )
      )
    )
  );

  editPolicySuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PolicyActions.editPolicySuccess),
        map(({ response }) => {
          this.router.navigate(['admin/policies/policy-list']);
          this.snackBar.open(response.message, 'Close', {
            duration: 5000,
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
          });
        })
      ),
    { dispatch: false }
  );

  deletePolicy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PolicyActions.deletePolicy),
      mergeMap((action) =>
        this.policyService.deletePolicy(action.id).pipe(
          map(() => PolicyActions.deletePolicySuccess({ id: action.id })),
          catchError((error) =>
            of(PolicyActions.deletePolicyFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private policyService: PolicyService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}
}
