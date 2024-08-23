import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { StaffListService } from '../service/staff-list.service';
import * as StaffListActions from './staff-list.actions';
import {
  deleteStaffDetails,
  deleteStaffDetailsFailure,
  deleteStaffDetailsSucess,
  editStaffDetails,
  editStaffDetailsFailure,
  loadStaffList,
} from './staff-list.actions';

@Injectable()
export class StaffListEffects {
  loadStaff$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadStaffList),
      mergeMap(() =>
        this.staffListService.getStaffList().pipe(
          map((staff) => StaffListActions.loadStaffListSuccess({ staff })),
          catchError((error) =>
            of(StaffListActions.loadStaffListFailure({ error: error.message }))
          )
        )
      )
    )
  );
  deleteStaffDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteStaffDetails),
      mergeMap((action) =>
        this.staffListService.deleteStaff(action.id).pipe(
          map(() => deleteStaffDetailsSucess({ id: action.id })),
          catchError((error) =>
            of(
              deleteStaffDetailsFailure({
                error: error.message,
              })
            )
          )
        )
      )
    )
  );

  editStaffDeails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editStaffDetails),
      mergeMap(({ id, staff }) =>
        this.staffListService.updateStaff(id, staff).pipe(
          map(() => StaffListActions.editStaffDetailsSucess({ id })),
          catchError((error) =>
            of(
              editStaffDetailsFailure({
                error: error.message,
              })
            )
          )
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private staffListService: StaffListService
  ) {}
}
