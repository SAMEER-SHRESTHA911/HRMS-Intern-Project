import { Component, OnInit } from '@angular/core';
import { LeaveBalanceData } from './types/leave-table';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { FETCH_AVAILABLE_LEAVE_DATA } from './store/leave-available/leave-available.actions';
import { Observable, of } from 'rxjs';
import { selectAvailableLeave, selectAvailableLeaveError, selectAvailableLeaveLoading } from './store/leave-available/leave-available.selector';
import { LeaveFormService } from '../leave-apply/services/form/leave-form.service';

@Component({
  selector: 'app-leave-management',
  templateUrl: './leave-management.component.html',
  styleUrl: './leave-management.component.scss',
})
export class LeaveManagementComponent implements OnInit{

  availableLeaveData$ : Observable<LeaveBalanceData[]> = of([]);
  loading$ : Observable<boolean> = of(false);
  error$ : Observable<string|null> =of(null);
  
 
  constructor(private router:Router, private store:Store, private leaveFormService: LeaveFormService){}

  ngOnInit(): void {
    this.store.dispatch(FETCH_AVAILABLE_LEAVE_DATA());
    this.initializer();
  }

  initializer(): void{
    this.availableLeaveData$ = this.store.pipe(select(selectAvailableLeave));
    this.availableLeaveData$.subscribe()

    this.loading$ = this.store.pipe(select(selectAvailableLeaveLoading));
    this.error$ = this.store.pipe(select(selectAvailableLeaveError));
  }

  routeToLeaveApply(): void{
    // this.leaveFormService.changeEditMode();
    this.router.navigate(['admin/leave-apply']);
  }
}


