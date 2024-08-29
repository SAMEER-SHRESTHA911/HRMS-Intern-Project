import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AttendanceRecord } from '../model/attendance-details.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { select, Store } from '@ngrx/store';
import {
  selectAttendanceError,
  selectAttendanceLoading,
  selectAttendanceRecords,
} from './store/attendance-details.selector';
import { loadAttendanceRecords } from './store/attendance-details.actions';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-attendance-details',
  templateUrl: './attendance-details.component.html',
  styleUrl: './attendance-details.component.scss',
})
export class AttendanceDetailsComponent implements OnInit {
  records$: Observable<AttendanceRecord[]> = of([]);
  loading$: Observable<boolean> = of(false);
  error$: Observable<string | null> = of(null);
  dataSource!: MatTableDataSource<AttendanceRecord>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  displayedColumns: (keyof AttendanceRecord)[] = [
    'SN',
    'Name',
    'CheckedInTime',
    'CheckedInStatus',
    'CheckedOutTime',
    'CheckedOutStatus',
    'PresentAbsent',
    'WorkedHours',
    'Actions',
  ];
  ngOnInit(): void {
    this.selectorInitializer();
    // this.dataSource.paginator = this.paginator;
    this.store.dispatch(loadAttendanceRecords());
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  onViewAttendanceDetails() {}
  applyFilter(event: Event) {
    if (this.dataSource) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }
  constructor(
    private store: Store<AttendanceRecord>,
    private dialog: MatDialog
  ) {}
  selectorInitializer(): void {
    this.records$ = this.store.pipe(select(selectAttendanceRecords));
    this.records$.subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.loading$ = this.store.pipe(select(selectAttendanceLoading));
    this.error$ = this.store.pipe(select(selectAttendanceError));
  }
}
