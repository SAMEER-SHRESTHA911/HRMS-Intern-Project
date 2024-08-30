import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AddStaffService } from '../service/api/add-staff.service';
import {
  addStaff,
  addStaffSuccess,
  addStaffFailure,
} from './add-staff.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FormService } from '../service/form/form.service';

@Injectable()
export class StaffEffects {
  constructor(
    private actions$: Actions,
    private addStaffService: AddStaffService,
    private formService: FormService
  ) {}
  addStaff$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addStaff),
      mergeMap(({ staff }) =>
        this.addStaffService.postStaff(staff).pipe(
          map((newStaff) => addStaffSuccess({ staff: newStaff.data })),
          catchError((error) => of(addStaffFailure({ error })))
        )
      )
    )
  );
  addStaffSucess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addStaffSuccess),
        map(({ staff }) => {
          this.formService.resetForm();
        })
      ),
    {
      dispatch: false,
    }
  );
}
