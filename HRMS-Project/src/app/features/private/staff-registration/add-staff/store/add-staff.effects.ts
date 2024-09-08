import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { loadCities } from '@shared/store/add-staff-dropdowns/city/city.actions';
import { loadCountries } from '@shared/store/add-staff-dropdowns/country/country.actions';
import { loadDepartments, loadDepartmentsSucess } from '@shared/store/add-staff-dropdowns/department/department.actions';
import { loadAddressById, loadAddressByIdSuccess } from '@shared/store/address-by-Id/address.actions';
import { of } from 'rxjs';
import { catchError, concatMap, delay, map, switchMap } from 'rxjs/operators';
import { AddStaffService } from '../service/api/add-staff.service';
import { FormService } from '../service/form/form.service';
import {
  addStaff,
  addStaffFailure,
  addStaffSuccess,
  fetchEmployeeData,
  fetchEmployeeDataFailure,
  fetchEmployeeDataSuccess,
  staffReadyToPatch,
} from './add-staff.actions';
import { selectToPatchStaffData } from './add-staff.selector';
import { concatLatestFrom } from '@ngrx/operators';
import { convertToStaffFormDetails } from '../transformer/staff-register-payload.transformer';
import { loadRoles } from '@shared/store/add-staff-dropdowns/role/role.actions';

@Injectable()
export class StaffEffects {
  constructor(
    private actions$: Actions,
    private addStaffService: AddStaffService,
    private formService: FormService,
    private store: Store
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
          map((data) => {
            return fetchEmployeeDataSuccess({ staffDetails: data.data })
          }
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
        console.log(staffDetails)
        // this.formService.registrationForm.patchValue(convertToStaffFormDetails(staffDetails))
        return (loadAddressById({ addressId: staffDetails.addressId }))
      })
    ),
  )
  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAddressByIdSuccess),
      map(({ address }) => {
        return loadCountries()
      })
    ),
  )
  loadDepartments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAddressByIdSuccess),
      map(({ address }) => {
        return loadCities({ countryId: address.cityId })
      })
    ),
  )
  loadCities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAddressByIdSuccess),
      map(({ address }) => {
        return loadDepartments()
      })
    ),
  )
  loadRoles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAddressByIdSuccess),
      map(({ address }) => {
        return loadRoles()
      })
    ),
  )
  staffReadyToPatch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAddressByIdSuccess),
      map(({ address }) => {
        return staffReadyToPatch()
      })
    ),
  )

  patch$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadDepartmentsSucess),
        concatLatestFrom(() => this.store.pipe(select(selectToPatchStaffData))),
        delay(10000),
        map(([_, value]) => {
          debugger
          this.formService.registrationForm.patchValue(value);
          this.formService.registrationForm.updateValueAndValidity()
          console.log(this.formService.registrationForm)
        })
      ),
    { dispatch: false }
  );
}
