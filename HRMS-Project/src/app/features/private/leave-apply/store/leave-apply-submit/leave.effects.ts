import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LeaveApplyBody } from '../../types/leave-apply';
import {
  submitLeaveForm,
  submitLeaveFormFail,
  submitLeaveFormSuccess,
} from '../leave-apply-submit/leave.actions';
import { catchError, map, of, switchMap } from 'rxjs';
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
