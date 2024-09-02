import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageData, LeaveRequestList } from '../../types/types';
import { LeaveConfirmationService } from '../../service/leave-confirmation.service';

@Component({
  selector: 'app-leave-approve-card',
  templateUrl: './leave-approve-card.component.html',
  styleUrl: './leave-approve-card.component.scss',
})
export class LeaveApproveCardComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: LeaveRequestList,
    private service:LeaveConfirmationService
  ) {}
  
   imageData : ImageData = {
    employeeId: 0,
    imageName: "",
    imageDataBase64: "",
  };

  ngOnInit(): void {
    console.log(this.data);
    this.service.fetchImage(1).subscribe((data) => {
      return (
        this.imageData.imageName = data.imageName,
        this.imageData.employeeId = data.employeeId,
        this.imageData.imageDataBase64 = data.imageDataBase64
      )
  }
)
  }
}
