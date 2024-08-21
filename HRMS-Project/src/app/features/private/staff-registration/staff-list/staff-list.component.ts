import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { StaffListService } from './service/staff-list.service';
import { StaffList } from './model/staff-list';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss'],
})
export class StaffListComponent implements OnInit {
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
    'password',
    'email',
    'actions',
  ];

  constructor(
    private staffListService: StaffListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadStaffList();
  }

  loadStaffList(): void {
    this.staffListService.getStaffList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource);
    });
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
}
