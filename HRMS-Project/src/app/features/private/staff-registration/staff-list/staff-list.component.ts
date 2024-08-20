import { Component, OnInit } from '@angular/core';
import { AddStaffService } from '../service/add-staff.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { StaffList } from './model/staff-list';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss'],
})
export class StaffListComponent implements OnInit {
  constructor(private apiService: AddStaffService, private router: Router) {}
  dataSource!: MatTableDataSource<any>;

  ngOnInit(): void {
    this.loadStaffList();
  }

  loadStaffList() {
    // this.apiService.getStaff().subscribe((data: any[]) => {});
  }

  onAdd() {
    this.router.navigate(['/add-staff']);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
