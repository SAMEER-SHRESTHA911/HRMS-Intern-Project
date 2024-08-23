import { Component, OnInit } from '@angular/core';
import { LeaveTableService } from './services/leave-table.service';
import { LeaveTableData } from './types/leave-table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave-management',
  templateUrl: './leave-management.component.html',
  styleUrl: './leave-management.component.scss',
})
export class LeaveManagementComponent{
 
  constructor(private router:Router){}

  routeToLeaveApply(){
    this.router.navigate(['admin/leave-apply']);
  }

}


