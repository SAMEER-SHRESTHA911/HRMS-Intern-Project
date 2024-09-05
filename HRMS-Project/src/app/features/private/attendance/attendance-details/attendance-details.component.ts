import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeeAttendanceRecord } from '../model/attendance-details.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { select, Store } from '@ngrx/store';
import {
  selectAttendanceError,
  selectAttendanceLoading,
  selectAttendanceRecords,
} from './store/attendance-details.selector';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentData } from '@shared/models/department.interface';
import { loadDepartments } from '@shared/store/add-staff-dropdowns/department/department.actions';
import { selectAllDepartments } from '@shared/store/add-staff-dropdowns/department/department.selector';
import { FormGroup } from '@angular/forms';
import { FormService } from './service/form/form.service';
import { loadAttendanceList } from './store/attendance-details.actions';

@Component({
  selector: 'app-attendance-details',
  templateUrl: './attendance-details.component.html',
  styleUrl: './attendance-details.component.scss',
})
export class AttendanceDetailsComponent implements OnInit {
  maxDate!: Date;
  records$: Observable<EmployeeAttendanceRecord[]> = of([]);
  loading$: Observable<boolean> = of(false);
  error$: Observable<string | null> = of(null);
  departments$: Observable<DepartmentData[]> = of([]);
  dataSource!: MatTableDataSource<EmployeeAttendanceRecord>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  displayedColumns: (keyof EmployeeAttendanceRecord)[] = [
    'id',
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

  get attendanceFilterForm(): FormGroup {
    return this.formService.attendanceFilterForm;
  }

  set attendanceFilterForm(form: FormGroup) {
    this.formService.attendanceFilterForm = form;
  }
  constructor(
    private formService: FormService,
    private store: Store<EmployeeAttendanceRecord>,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.formService.initializeForm()
    this.selectorInitializer();
    this.getDeparmentList();
    this.dataSource.paginator = this.paginator;

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getDeparmentList(): void {
    this.store.dispatch(loadDepartments());

  }

  onViewAttendanceDetails() { }
  applyFilter(event: Event) {
    if (this.dataSource) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }
  setMaxDate(): void {
    this.maxDate = new Date();
  }
  onSubmit() {
    const formValue = this.formService.getFormValue();
    this.store.dispatch(loadAttendanceList({ payload: formValue }));
  }
  selectorInitializer(): void {
    this.records$ = this.store.pipe(select(selectAttendanceRecords));
    this.records$.subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.loading$ = this.store.pipe(select(selectAttendanceLoading));
    this.error$ = this.store.pipe(select(selectAttendanceError));
    this.departments$ = this.store.select(selectAllDepartments);

  }
}
