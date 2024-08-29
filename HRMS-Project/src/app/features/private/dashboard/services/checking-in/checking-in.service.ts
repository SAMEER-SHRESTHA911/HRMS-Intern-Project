import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { type CheckInDetails } from '../../types/check-in.interface';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  //Api-------------
  postCheckInStatus(
    checkInDetails: CheckInDetails
  ): Observable<CheckInDetails> {
    return this.http.post<CheckInDetails>(this.apiUrl, checkInDetails);
  }

  getCheckInStatus(): Observable<CheckInDetails> {
    return this.http.get<CheckInDetails>(this.apiUrl);
  }
}
