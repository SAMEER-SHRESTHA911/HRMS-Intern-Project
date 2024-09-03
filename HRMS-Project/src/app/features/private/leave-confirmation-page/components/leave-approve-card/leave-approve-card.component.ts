import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageData, LeaveRequestList } from '../../types/types';
import { LeaveConfirmationService } from '../../service/leave-confirmation.service';
import { Store } from '@ngrx/store';
import { LEAVE_ACCEPT_REJECT } from '../../store/leave-card-approve/leave-card.action';
import { FETCH_IMAGE } from '../../store/profile-image/profile-image.action';
import { Observable, of } from 'rxjs';
import { selectImageData } from '../../store/profile-image/profile-image.selector';
import { ROUTE_CONSTANT } from '@shared/constants/routes.constant';

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
    private service: LeaveConfirmationService,
    private store:Store
  ) {}

  imageData$:Observable<ImageData|null> = of();

  imageData: ImageData = {
    employeeId: 0,
    imageName: '',
    imageDataBase64: '',
  };

  ngOnInit(): void {
    console.log(this.data);
    this.store.dispatch(FETCH_IMAGE({ id:  this.data.employeeId }));
    this.imageData$ = this.store.select(selectImageData);
  }
  approve(id:string|number):void{
    this.store.dispatch(LEAVE_ACCEPT_REJECT({id, option:2}));   
    this.router.navigate([ROUTE_CONSTANT.leaveConfirmationPage]) ;
  }
  reject(id:string|number): void{
    this.store.dispatch(LEAVE_ACCEPT_REJECT({id, option:2}));
    this.router.navigate([ROUTE_CONSTANT.leaveConfirmationPage]) ;
  }
}
