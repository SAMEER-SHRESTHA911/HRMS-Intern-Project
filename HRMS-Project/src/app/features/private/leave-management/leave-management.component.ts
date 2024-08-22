import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-leave-management',
  templateUrl: './leave-management.component.html',
  styleUrl: './leave-management.component.scss',
})
export class LeaveManagementComponent {
  leave_details = [
    {
      no: 1,
      fromDate: new Date(),
      toDate: new Date(),
      duration: 5,
      reason: 'Vacation',
      status: 'Approved',
    },
    {
      no: 2,
      fromDate: new Date(),
      toDate: new Date(),
      duration: 3,
      reason: 'Sick Leave',
      status: 'Pending',
    },
  ];

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
