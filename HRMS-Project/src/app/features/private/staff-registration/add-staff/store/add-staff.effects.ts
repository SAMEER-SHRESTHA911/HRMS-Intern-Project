import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AddStaffService } from '../service/add-staff.service';
import {
  addStaff,
  addStaffSuccess,
  addStaffFailure,
} from './add-staff.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class StaffEffects {
  constructor(
    private actions$: Actions,
    private addStaffService: AddStaffService
  ) {}
  addStaff$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addStaff),
      mergeMap(({ staff }) =>
        this.addStaffService.postStaff(staff).pipe(
          map((newStaff) => addStaffSuccess({ staff: newStaff })),
          catchError((error) => of(addStaffFailure({ error })))
        )
      )
    )
  );
}
