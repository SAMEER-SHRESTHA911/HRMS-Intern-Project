import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AddStaffService } from '../service/api/add-staff.service';
import { FormService } from '../service/form/form.service';
import {
  addStaff,
  addStaffFailure,
  addStaffSuccess,
  fetchEmployeeData,
  fetchEmployeeDataFailure,
  fetchEmployeeDataSuccess,
} from './add-staff.actions';
import { convertToStaffFormDetails } from '../transformer/staff-register-payload.transformer';

@Injectable()
export class StaffEffects {
  constructor(
    private actions$: Actions,
    private addStaffService: AddStaffService,
    private formService: FormService
  ) { }

  addStaff$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addStaff),
      switchMap(({ staff }) => this.addStaffService.postStaff(staff).pipe(
        map(() => addStaffSuccess()),
        catchError((error) => of(addStaffFailure({ error: error.message }))),
      )),
    )
  );

  addStaffSucess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addStaffSuccess),
        map(() => {
          this.formService.resetForm();
          this.formService.nagivateTo();
        })
      ),
    {
      dispatch: false,
    }
  );
  fetchEmployeeData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchEmployeeData),
      switchMap(({ staffId }) =>
        this.addStaffService.getEmployeeData(staffId).pipe(
          map((data) =>
            fetchEmployeeDataSuccess({ staffDetails: data.data })
          ),
          catchError((error) =>
            of(fetchEmployeeDataFailure({ error: error.message }))
          )
        )
      )
    )
  );
  fetchEmployeeDataSucess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchEmployeeDataSuccess),
      map(({ staffDetails }) => {
        this.formService.registrationForm.patchValue(convertToStaffFormDetails(staffDetails))
      })
    ),
    { dispatch: false }
  )
}
