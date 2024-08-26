import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LeaveTableService } from '../../services/leave-table.service';
import { LeaveTableData } from '../../types/leave-table';
import { Observable, of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectLeaveData, selectLeaveDataError, selectLeaveDataLoading } from '../../store/leave-table/leave-table-selectors';
import { LEAVE_TABLE_DATA } from '../../store/leave-table/leave-table.actions';
import { Router } from '@angular/router';
import { LeaveFormService } from '../../../leave-apply/services/form/leave-form.service';

@Component({
  selector: 'app-leave-table',
  templateUrl: './leave-table.component.html',
  styleUrls: ['./leave-table.component.scss']
})
export class LeaveTableComponent implements OnInit {

  leaveData$ : Observable<LeaveTableData[]> =  of([]);
  loading$ : Observable<boolean> = of(false);
  error$  :Observable<string|null> = of(null);
  dataSource! : MatTableDataSource<LeaveTableData>;
  
  displayedColumns: (keyof  LeaveTableData)[] = [
    'id',
    'leaveFrom',
    'leaveTo',
    'leaveType',
    'dayLeave',
    'reasonForLeave',
    'leaveRequestStatus',
  ];
  
  constructor(private store: Store, private router: Router, private leaveFormService : LeaveFormService) { }
  
  ngOnInit(): void {
    this.store.dispatch(LEAVE_TABLE_DATA());
    this.selectorInitializer();
  }

  selectorInitializer():void{
    this.store.pipe(select(selectLeaveData))
    .subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.loading$ = this.store.pipe(select(selectLeaveDataLoading));
    this.error$ = this.store.pipe(select(selectLeaveDataError));
  }
  onEdit(id:number){
    this.leaveFormService.changeEditMode();
    this.router.navigate([`/admin/leave-apply/${id}`]);
  }
}
