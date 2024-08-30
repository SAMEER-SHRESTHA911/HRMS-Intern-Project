import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { CheckingInService } from '../../services/checking-in/checking-in.service';
import {
  postCheckInAction,
  postCheckInFailure,
  postCheckInSuccess,
} from './checkin-in.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class CheckInEffects {
  constructor(
    private actions$: Actions,
    private checkInService: CheckingInService,
    private snackBar: MatSnackBar
  ) {}

  postCheckIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postCheckInAction),
      mergeMap(({ checkInDetails }) =>
        this.checkInService.postCheckInStatus(checkInDetails).pipe(
          map((response) => postCheckInSuccess({ data: response.data })),
          catchError((error) =>
            of(postCheckInFailure({ error: error.message }))
          )
        )
      )
    )
  );

  showSuccessSnackbar$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(postCheckInSuccess), // Trigger on success action
        tap(() => {
          this.snackBar.open('Successfully Checked-In!', 'Close', {
            duration: 3000, // Duration for the snackbar (3 seconds)
            horizontalPosition: 'right', // Position the snackbar horizontally
            verticalPosition: 'bottom', // Position the snackbar vertically
            panelClass: ['snackbar-success'], // Optional: Custom class for styling
          });
        })
      ),
    { dispatch: false } // No need to dispatch a new action
  );

  showErrorSnackbar$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(postCheckInFailure), // Trigger on failure action
        tap(({ error }) => {
          this.snackBar.open(
            `Check-In Failed! Please Try Again: ${error}`,
            'Close',
            {
              duration: 3000, // Duration for the snackbar (3 seconds)
              horizontalPosition: 'right', // Position the snackbar horizontally
              verticalPosition: 'bottom', // Position the snackbar vertically
              panelClass: ['snackbar-error'], // Optional: Custom class for styling
            }
          );
        })
      ),
    { dispatch: false } // No need to dispatch a new action
  );
}
