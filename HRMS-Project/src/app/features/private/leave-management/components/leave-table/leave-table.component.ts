import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LeaveTableService } from '../../services/leave-table.service';
import { leaveTableData } from '../../types/leave-table';

@Component({
  selector: 'app-leave-table',
  templateUrl: './leave-table.component.html',
  styleUrl: './leave-table.component.scss'
})
export class LeaveTableComponent implements OnInit{

  leave_details ?:  leaveTableData[];

  
  constructor(private apiService : LeaveTableService){}

  ngOnInit(): void {
    // this.leave_details = this.apiService.getLeaveTableData()    
  }

  // leave_details = [
  //   {
  //     no: 1,
  //     fromDate: new Date(),
  //     toDate: new Date(),
  //     duration: 5,
  //     reason: 'Vacation',
  //     status: 'Approved',
  //   },
  //   {
  //     no: 2,
  //     fromDate: new Date(),
  //     toDate: new Date(),
  //     duration: 3,
  //     reason: 'Sick Leave',
  //     status: 'Pending',
  //   },
  // ];

  displayedColumns: string[] = [
    'no',
    'fromDate',
    'toDate',
    'duration',
    'reason',
    'status',
  ];
  dataSource = new MatTableDataSource(this.leave_details);
}
