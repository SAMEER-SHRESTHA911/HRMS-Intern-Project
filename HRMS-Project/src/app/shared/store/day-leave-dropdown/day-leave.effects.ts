// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { DayLeaveDropdownService } from '../../services/day-leave-dropdown/day-leave-dropdown.service';
// import { FETCH_DAY_LEAVE_DROPDOWN, FETCH_DAY_LEAVE_DROPDOWN_SUCCESS } from './day-leave.actions';
// import { map, mergeMap } from 'rxjs';

// @Injectable()
// export class DayLeaveDropdownEffects {
//   constructor(
//     private action$: Actions,
//     private dayLeaveDropdownService: DayLeaveDropdownService,
//   ) {}

//   fetchDayLeaveDropdown = createEffect(() => 
// this.action$.pipe(
//     ofType(FETCH_DAY_LEAVE_DROPDOWN),
//     mergeMap(() => 
//     this.dayLeaveDropdownService.getDayLeaveDropdown().pipe(
//         map((dayLeaveDropdown) => {
//             return FETCH_DAY_LEAVE_DROPDOWN_SUCCESS({ dayLeaveDropdown})
//         })
//     ))
// ))
// }
