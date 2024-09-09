import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AttendanceData, EmployeeAttendanceRecord, EmployeeAttendanceRecordForTable } from '../model/attendance-details.interface';
import { select, Store } from '@ngrx/store';
import { loadAttendanceListById } from './store/attendance-details-by-id.actions';
import { selectAttendanceByIdRecords } from './store/attendance-details-by-id.selector';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attendance-by-id',
  templateUrl: './attendance-by-id.component.html',
  styleUrl: './attendance-by-id.component.scss'
})
export class AttendanceByIdComponent implements OnInit {

  dataSource!: MatTableDataSource<EmployeeAttendanceRecord>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  records$: Observable<AttendanceData | undefined> = of(undefined);
  id: string = ''
  displayedColumns: (keyof EmployeeAttendanceRecordForTable)[] = [
    'SN',
    'employeeName',
    'employeeId',
    'departmentName',
    'departmentId',
    'checkIn',
    'checkInReason',
    'checkOut',
    'checkOutReason',
    'workingHour',
    'workLocation',
  ];

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getIdFromRoute();
    this.store.dispatch(loadAttendanceListById({ payload: { sort: { sortBy: 'Asc' } } }));

  }
  selectorInitializer(): void {
    this.records$ = this.store.pipe(select(selectAttendanceByIdRecords));
    this.records$.subscribe((data) => {
      this.dataSource = new MatTableDataSource(data?.data);
    });
  }

  getIdFromRoute(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') ?? '';
      console.log(this.id)
    });
  }
}
