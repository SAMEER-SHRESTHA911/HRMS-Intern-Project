import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CheckingInService {
  checkInForm!: FormGroup;
  // private apiUrl = 'http://localhost:3000/checkInDetails';

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

  //-----For Check-In-Status----------
  getCheckInStatus(): Observable<{
    result: number;
    message: string;
    data: boolean;
  }> {
    return this.http.get<{ result: number; message: string; data: boolean }>(
      'http://0.0.0.0:2209/api/Attendance/CheckCheckInStatus'
    );
  }
}
