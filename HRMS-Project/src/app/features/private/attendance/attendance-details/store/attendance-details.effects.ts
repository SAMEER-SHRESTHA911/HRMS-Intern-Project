import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AttendanceDetailsService } from '../service/attendance-details.service';
import {
  loadAttendanceRecords,
  loadAttendanceRecordsSuccess,
  loadAttendanceRecordsFailure,
} from './attendance-details.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AttendanceEffects {
  loadAttendanceRecords$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAttendanceRecords),
      mergeMap(() =>
        this.attendanceService.getAttendanceRecords().pipe(
          map((records) => loadAttendanceRecordsSuccess({ records })),
          catchError((error) =>
            of(loadAttendanceRecordsFailure({ error: error.message }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private attendanceService: AttendanceDetailsService
  ) {}
}
