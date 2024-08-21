import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { StaffListService } from './service/staff-list.service';
import { StaffList } from './model/staff-list';
import { select, Store } from '@ngrx/store';
import { StaffListState } from './store/staff-list.state';
import { Observable, of } from 'rxjs';
import {
  selectStaffList,
  selectStaffListError,
  selectStaffListLoading,
} from './store/staff-list.selector';
import { loadStaffList } from './store/staff-list.actions';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss'],
})
export class StaffListComponent implements OnInit {
  staff$: Observable<StaffList[]> = of([]);
  loading$: Observable<boolean> = of(false);
  error$: Observable<string | null> = of(null);
  dataSource!: MatTableDataSource<StaffList>;
  displayedColumns: (keyof StaffList)[] = [
    'id',
    'firstName',
    'middleName',
    'lastName',
    'phoneNumber',
    'gender',
    'dob',
    'address',
    'nationality',
    'citizenshipNumber',
    'startDate',
    'department',
    'role',
    'email',
    'actions',
  ];

  constructor(
    private staffListService: StaffListService,
    private router: Router,
    private store: Store<StaffListState>
  ) {}

  ngOnInit(): void {
    this.selectorInitializer();
    this.store.dispatch(loadStaffList());
  }

  onAdd() {
    this.router.navigate(['/add-staff']);
  }
  onEditStaffDetails() {}
  onDeleteStaffDetails() {}
  onViewStaffDetails() {}
  applyFilter(event: Event) {
    if (this.dataSource) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }
  selectorInitializer(): void {
    this.staff$ = this.store.pipe(select(selectStaffList));
    this.staff$.subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.loading$ = this.store.pipe(select(selectStaffListLoading));
    this.error$ = this.store.pipe(select(selectStaffListError));
  }
}
