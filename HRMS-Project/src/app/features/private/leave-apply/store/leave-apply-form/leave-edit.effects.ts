import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { GET_EDIT_LEAVE_DATA, GET_EDIT_LEAVE_DATA_FAILURE, GET_EDIT_LEAVE_DATA_SUCCESS } from "./leave-edit.action";
import { catchError, map, mergeMap, of, switchMap, tap } from "rxjs";
import { LeaveFormService } from "../../services/form/leave-form.service";
import { LeaveApplyBody } from "../../types/leave-apply";

@Injectable()
export class LeaveEditEffect {
    constructor(private leaveEditService : LeaveFormService, private action$: Actions,) { }

    fetchEditLeaveData$ = createEffect(()=> 
    this.action$.pipe(
        ofType(GET_EDIT_LEAVE_DATA),
        switchMap((action) => 
            this.leaveEditService.fetchEditLeaveData(action.id).pipe(
                map((editLeaveData : LeaveApplyBody) => 

                    GET_EDIT_LEAVE_DATA_SUCCESS({ editLeaveData })
                ),
                catchError((error) => of(GET_EDIT_LEAVE_DATA_FAILURE({ error })))
            )
        )
    ));

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