import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LeaveConfirmationService } from '../../services/leave-confirmation/leave-confirmation.service';

@Component({
  selector: 'app-leave-approve-reject',
  templateUrl: './leave-approve-reject.component.html',
  styleUrl: './leave-approve-reject.component.scss'
})
export class LeaveApproveRejectComponent implements OnInit{
  constructor(private  http: HttpClient,private leaveRequestList: LeaveConfirmationService) { }
  
  ngOnInit(): void {
      this.leaveRequestList.fetchRequestList().subscribe((data)=> console.log(data))
  }
  
}
