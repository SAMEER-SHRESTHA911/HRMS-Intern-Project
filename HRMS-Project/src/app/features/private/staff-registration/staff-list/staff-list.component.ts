import { Component, OnInit, ViewChild } from '@angular/core';
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
import { deleteStaffDetails, loadStaffList } from './store/staff-list.actions';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DialogData } from '@shared/components/model/dialog.interface';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '@shared/components/dialog/dialog.component';

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
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  displayedColumns: (keyof StaffList)[] = [
    'id',
    'firstName',
    // 'middleName',
    'lastName',
    'phoneNumber',
    // 'gender',
    // 'dob',
    'address',
    'nationality',
    // 'citizenshipNumber',
    // 'startDate',
    'department',
    'role',
    'email',

    'actions',
  ];

  constructor(
    // private staffListService: StaffListService,
    private router: Router,
    private store: Store<StaffListState>,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.selectorInitializer();
    this.store.dispatch(loadStaffList());
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onEditStaffDetails(id: number): void {
    this.router.navigate(['/admin/staff-registration/edit-staff', id]);
  }
  onViewStaffDetails(id: number | string): void {
    this.router.navigate([`/admin/profile-details`, id]);
  }
  onAddNewEmployee(): void {
    this.router.navigate(['/admin/staff-registration/add-staff']);
  }

  onDeleteStaffDetails(id: number): void {
    const dialogData: DialogData = {
      titleArray: ['Are you sure you want to delete?'],
      buttonArray: [
        {
          label: 'Cancel',
          type: 'warning',
          action: () => {
            return;
          },
        },
        {
          label: 'Confirm',
          type: 'primary',
          action: () => {
            this.store.dispatch(deleteStaffDetails({ id }));
          },
        },
      ],
    };
    this.dialog.open(DialogComponent, {
      data: dialogData,
    });
  }
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
