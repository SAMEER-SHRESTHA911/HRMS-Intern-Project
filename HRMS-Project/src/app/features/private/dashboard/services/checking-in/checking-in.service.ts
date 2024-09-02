import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  type CheckInDetails,
  CheckOutDetails,
} from '../../types/check-in.interface';
import { ResponseType } from '@shared/models/response.model';

@Injectable({
  providedIn: 'root',
})
export class CheckingInService {
  checkInForm!: FormGroup;
  private apiUrl = 'http://localhost:3000/checkInDetails';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.initializeCheckInForm();
  }

  initializeCheckInForm(): void {
    this.checkInForm = this.fb.group({
      remarks: ['', [Validators.required]],
      workLocation: ['', Validators.required],
    });
  }

  resetForm(): void {
    this.checkInForm.reset();
  }

  //------For Check-In--------
  postCheckInStatus(
    checkInDetails: CheckInDetails
  ): Observable<ResponseType<CheckInDetails>> {
    return this.http.post<ResponseType<CheckInDetails>>(
      this.apiUrl,
      checkInDetails
    );
  }

  //-----For Check-In-Status----------
  getCheckInStatus(): Observable<CheckInDetails> {
    return this.http.get<CheckInDetails>(this.apiUrl);
  }

  //------For Check-Out---------
  postCheckOut(
    checkOutDetails: CheckOutDetails
  ): Observable<ResponseType<CheckOutDetails>> {
    return this.http.post<ResponseType<CheckOutDetails>>(
      this.apiUrl,
      checkOutDetails
    );
  }
}
