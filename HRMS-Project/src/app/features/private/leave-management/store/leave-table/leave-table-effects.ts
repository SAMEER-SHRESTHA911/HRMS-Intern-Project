import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LEAVE_TABLE_DATA } from './leave-table.actions';
import { LeaveTableService } from '../../services/leave-table.service';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as LeaveTableDataActions from './leave-table.actions';

@Injectable()
export class LeaveTableEffects {
  constructor(
    private action$: Actions,
    private leaveTableService: LeaveTableService
  ) {}

  loadLeaveTable$ = createEffect(() =>
    this.action$.pipe(
      ofType(LEAVE_TABLE_DATA),
      mergeMap(() =>
        this.leaveTableService.getLeaveTableData().pipe(
          map((leaveData) =>{
            console.log('Fetched Leave Data:', leaveData);
            return LeaveTableDataActions.LEAVE_TABLE_DATA_SUCCESS({ leaveData })
          }
          ),
          catchError((error) =>
            of(
              LeaveTableDataActions.LEAVE_TABLE_DATA_FAILURE({
                error: error.message,
              })
            )
          )
        )
      )
    )
  );
}
