import { Component, OnInit } from '@angular/core';
import { LeaveTableService } from './services/leave-table.service';
import { LeaveAvailableData, LeaveTableData } from './types/leave-table';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { FETCH_AVAILABLE_LEAVE_DATA } from './store/leave-available/leave-available.actions';
import { Observable, of } from 'rxjs';
import { selectAvailableLeave, selectAvailableLeaveError, selectAvailableLeaveLoading } from './store/leave-available/leave-available.selector';

@Component({
  selector: 'app-leave-management',
  templateUrl: './leave-management.component.html',
  styleUrl: './leave-management.component.scss',
})
export class LeaveManagementComponent implements OnInit{

  availableLeaveData$ : Observable<LeaveAvailableData> = of();
  loading$ : Observable<boolean> = of(false);
  error$ : Observable<string|null> =of(null);
 
  constructor(private router:Router, private store:Store){}

  ngOnInit(): void {
    this.store.dispatch(FETCH_AVAILABLE_LEAVE_DATA());
    this.initializer();
  }

  initializer(): void{
    this.availableLeaveData$ = this.store.pipe(select(selectAvailableLeave));
    this.availableLeaveData$.subscribe(data => {
      console.log(data)
    })
    console.log('This is the available  leave data', this.availableLeaveData$)

    this.loading$ = this.store.pipe(select(selectAvailableLeaveLoading));
    this.error$ = this.store.pipe(select(selectAvailableLeaveError));
  }

  routeToLeaveApply(): void{
    this.router.navigate(['admin/leave-apply']);
  }
}


