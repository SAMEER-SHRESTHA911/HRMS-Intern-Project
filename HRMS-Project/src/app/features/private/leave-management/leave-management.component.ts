import { Component, OnInit } from '@angular/core';
import { LeaveBalanceData } from './types/leave-table';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { FETCH_AVAILABLE_LEAVE_DATA } from './store/leave-available/leave-available.actions';
import { map, Observable, of, startWith, switchMap } from 'rxjs';
import { selectAvailableLeave, selectAvailableLeaveError, selectAvailableLeaveLoading } from './store/leave-available/leave-available.selector';
import { LeaveFormService } from '../leave-apply/services/form/leave-form.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-leave-management',
  templateUrl: './leave-management.component.html',
  styleUrl: './leave-management.component.scss',
})
export class LeaveManagementComponent implements OnInit{

  availableLeaveData$ : Observable<LeaveBalanceData[]> = of([]);
  loading$ : Observable<boolean> = of(false);
  error$ : Observable<string|null> =of(null);
  
  leaveType : number = 0;

  leaveTypeDropDown = new FormControl(1);

  filteredLeaveData$: Observable<LeaveBalanceData | undefined> = of(undefined)
 
  constructor(private router:Router, private store:Store, private leaveFormService: LeaveFormService){}

  ngOnInit(): void {
    this.initializer();
    this.store.dispatch(FETCH_AVAILABLE_LEAVE_DATA());
    this.filterLeaveDataInit();

    this.leaveTypeDropDown.valueChanges.subscribe(value => {
      console.log('Dropdown Value Changed:', value);
    });
  }

  initializer(): void{
    this.availableLeaveData$ = this.store.pipe(select(selectAvailableLeave));
    this.availableLeaveData$.subscribe(
      data => console.log(data)
    );

    this.loading$ = this.store.pipe(select(selectAvailableLeaveLoading));
    this.error$ = this.store.pipe(select(selectAvailableLeaveError));
    
  }

  filterLeaveDataInit():void{
    
    const leaveTypeMap : { [key:number]:string } = {
      1: 'Sick',
      2: 'Annual',
      3: 'Other',
    }

    this.filteredLeaveData$ = this.leaveTypeDropDown.valueChanges.pipe(
      startWith(this.leaveTypeDropDown.value??1),
      map(value => 
        {
          const validValue = value??1;
          return leaveTypeMap[validValue]??'Sick';
        }),
      switchMap((selectedLeaveType : string) => {
        return this.availableLeaveData$.pipe(
          map(leaveDataArray => {
            const filteredData = leaveDataArray.find(data => data.leaveTypeEnum == selectedLeaveType);
            return filteredData;
          }
          ),
        )
      })
    )
  }

  routeToLeaveApply(): void{
    this.router.navigate(['admin/leave-apply']);
  }
}


