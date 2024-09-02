import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LeaveRequestList } from './types/types';
import { Store } from '@ngrx/store';
import { FETCH_LEAVE_REQUEST_lIST } from './store/leave-confirmation.actions';
import { selectLeaveRequestList } from './store/leave-confirmation.selector';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-leave-confirmation-page',
  templateUrl: './leave-confirmation-page.component.html',
  styleUrl: './leave-confirmation-page.component.scss'
})
export class LeaveConfirmationPageComponent implements OnInit{
 
  leaveStatusTableData$ : Observable<LeaveRequestList> = of();
  
  displayedColumns: string[] = ['id', 'employeeName', 'phoneNumber', 'leaveFrom', 'leaveTo', 'reasonForLeave', 'leaveType', 'totalLeaveDuration', 'leaveRequestStatus'];
  dataSource = new MatTableDataSource<LeaveRequestList>();
  
  @ViewChild(MatPaginator) paginator?:MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;
  
  constructor(private store:Store){}
 
  ngOnInit(): void {
    this.initializeTableData();
  }
  
  applyFilter(event: Event) {
    if (this.dataSource) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }

  initializeTableData():void{
    this.store.dispatch(FETCH_LEAVE_REQUEST_lIST());
    this.store.select(selectLeaveRequestList).subscribe((leaveRequestList) => 
      {
        this.dataSource = new MatTableDataSource(leaveRequestList)
        console.log('From ts',leaveRequestList);
        if(this.paginator){
          this.dataSource.paginator = this.paginator;
        }
        if(this.sort){
          this.dataSource.sort = this.sort;
        }
      })
  }

  onEdit(id:string|number){
    console.log(id);
  }
}
