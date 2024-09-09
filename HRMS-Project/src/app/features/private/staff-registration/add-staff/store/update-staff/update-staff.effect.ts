import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { updateEmployee, updateEmployeeFailure, updateEmployeeSuccess } from "./update-staff.action";
import { catchError, map, mergeMap, of } from "rxjs";
import { UpdateStaffService } from "../../service/update-staff/update-staff.service";

@Injectable()
export class UpdateEmployeeEffects {

    updateEmployee$ = createEffect(() =>
        this.actions$.pipe(
            ofType(updateEmployee),
            mergeMap(action =>
                this.updateStaffService.updateEmployeeData(action.employeeId, action.updatedData).pipe(
                    map(response => updateEmployeeSuccess({ data: response.data })),
                    catchError(error => of(updateEmployeeFailure({ error: error.message })))
                )
            )
        )
    );
    updateEmployeeSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(updateEmployeeSuccess), map(() => {
            this.updateStaffService.nagivateTo();
        })
    ),
        {
            dispatch: false,
        }
    )
    constructor(
        private actions$: Actions,
        private updateStaffService: UpdateStaffService
    ) { }
}
