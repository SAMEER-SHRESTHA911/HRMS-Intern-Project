import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LeaveTableService } from '../../services/leave-table.service';
import { FETCH_AVAILABLE_LEAVE_DATA, FETCH_AVAILABLE_LEAVE_DATA_FAILURE, FETCH_AVAILABLE_LEAVE_DATA_SUCCESS } from './leave-available.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { LEAVE_TABLE_DATA_SUCCESS } from '../leave-table/leave-table.actions';
import { LeaveAvailableData } from '../../types/leave-table';

Injectable();
export class LeaveAvailableEffects {
  constructor(
    private action$: Actions,
    private leaveTableService: LeaveTableService 
  ) {}

  loadAvailableLeaveData = createEffect(()=> 
    this.action$.pipe(
        ofType(FETCH_AVAILABLE_LEAVE_DATA),
        mergeMap(()=> 
        this.leaveTableService.getLeaveAvailableData().pipe(
            map((availableLeaveData : LeaveAvailableData) => {
                console.log('Fetched Available Data:',availableLeaveData);
                return FETCH_AVAILABLE_LEAVE_DATA_SUCCESS({ availableLeaveData });
            }),
            catchError((error)=> 
            of(
                FETCH_AVAILABLE_LEAVE_DATA_FAILURE({
                    error: error.message,
                })
            ))
        )
    )
    )
)
}
