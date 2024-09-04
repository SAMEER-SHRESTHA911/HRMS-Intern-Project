import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LeaveRequestList } from './types/types';
import { Store } from '@ngrx/store';
import { FETCH_LEAVE_REQUEST_lIST } from './store/leave-confirmation/leave-confirmation.actions';
import { selectLeaveRequestList } from './store/leave-confirmation/leave-confirmation.selector';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LeaveApproveCardComponent } from './components/leave-approve-card/leave-approve-card.component';

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
  
  constructor(private store:Store, private router:Router, private dialog:MatDialog){}
 
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

  onView(id:string|number):void{
    this.store.select(selectLeaveRequestList).subscribe(leaveRequestList => {
      const leaveRequest = leaveRequestList.find(item => item.id === id);
      console.log(leaveRequest)
      if(leaveRequest){
        console.log(leaveRequest)
        this.dialog.open(LeaveApproveCardComponent, {
          data: leaveRequest
        })
      }
    })
  }
}
