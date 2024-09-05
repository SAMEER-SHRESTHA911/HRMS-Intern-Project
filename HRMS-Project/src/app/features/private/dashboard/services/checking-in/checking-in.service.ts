import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  CheckInMessage,
  CheckInOutMessageResponse,
} from '../../types/check-in.interface';
import { apiConstants } from '@shared/constants/api.constants';

@Injectable({
  providedIn: 'root',
})
export class CheckingInService {
  checkInForm!: FormGroup;
  checkOutForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.initializeCheckInForm();
  }

  initializeCheckInForm(): void {
    this.checkInForm = this.fb.group({
      remarks: ['', Validators.required],
      workLocation: ['', Validators.required],
    });
  }

  initializeCheckOutForm(): void {
    this.checkOutForm = this.fb.group({
      remarks: ['', Validators.required],
    });
  }

  //-----For Check-In-Status----------
  getCheckInStatus(): Observable<{
    result: number;
    message: string;
    data: boolean;
  }> {
    return this.http.get<{ result: number; message: string; data: boolean }>(
      apiConstants.attendance.getCheckInStatus
    );
  }

  //------For Check-In Message
  postCheckedInMessage(
    message: CheckInMessage
  ): Observable<CheckInOutMessageResponse> {
    return this.http.post<CheckInOutMessageResponse>(
      apiConstants.attendance.postCheckIn,
      message
    );
  }

  //-----For Check-Out Message
  postCheckOutMessage(message: {
    checkOutReason: string;
  }): Observable<CheckInOutMessageResponse> {
    return this.http.post<CheckInOutMessageResponse>(
      apiConstants.attendance.postCheckOut,
      message
    );
  }
}
