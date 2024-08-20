import { Component, OnInit } from '@angular/core';
import { AddStaffService } from '../add-staff/service/add-staff.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

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
    this.dataSource = new MatTableDataSource();
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
