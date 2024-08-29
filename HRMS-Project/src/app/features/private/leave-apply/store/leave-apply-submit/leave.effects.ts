import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LeaveApplyBody, LeaveApplyResponse } from '../../types/leave-apply';
import {
  leaveApply,
  submitLeaveForm,
  submitLeaveFormFail,
  submitLeaveFormSuccess,
} from '../leave-apply-submit/leave.actions';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { LeaveApplyApiService } from '../../services/api/leave-api.service';

@Injectable()
export class LeaveEffects {
  constructor(
    private action$: Actions,
    private leaveService: LeaveApplyApiService
  ) {}

  submitLeaveForm$ = createEffect(() =>
    this.action$.pipe(
      ofType(submitLeaveForm),
      switchMap((action) =>
        this.leaveService.addLeaveRequest(action.leaveData).pipe(
          map((leaveData: LeaveApplyBody) =>
            submitLeaveFormSuccess({ leaveData })
          ),
          catchError((error) => of(submitLeaveFormFail({ error })))
        )
      )
    )
  );
}
