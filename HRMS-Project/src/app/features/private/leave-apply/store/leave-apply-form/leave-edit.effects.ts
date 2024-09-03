import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  GET_EDIT_LEAVE_DATA,
  GET_EDIT_LEAVE_DATA_FAILURE,
  GET_EDIT_LEAVE_DATA_SUCCESS,
} from './leave-edit.action';
import { catchError, map, of, switchMap } from 'rxjs';
import { LeaveFormService } from '../../services/form/leave-form.service';
import { LeaveApplyBody } from '../../types/leave-apply';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class LeaveEditEffect {
  constructor(
    private leaveEditService: LeaveFormService,
    private action$: Actions,
    private snackBar: MatSnackBar

  ) {}

  fetchEditLeaveData$ = createEffect(() =>
    this.action$.pipe(
      ofType(GET_EDIT_LEAVE_DATA),
      switchMap((action) =>
        this.leaveEditService.fetchEditLeaveData(action.id).pipe(
          map((editLeaveData: LeaveApplyBody) => {
            this.snackBar.open('You have edited your leave application', 'Close', { duration: 5000 });
            return GET_EDIT_LEAVE_DATA_SUCCESS({ editLeaveData });
          }),
          catchError((error) => of(GET_EDIT_LEAVE_DATA_FAILURE({ error })))
        )
      )
    )
  );

  onSucess$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(GET_EDIT_LEAVE_DATA_SUCCESS),
        map((action) => {
          this.leaveEditService.patchData(
            this.leaveEditService.buildForm(),
            action.editLeaveData
          );
        })
      ),
    { dispatch: false }
  );
}
