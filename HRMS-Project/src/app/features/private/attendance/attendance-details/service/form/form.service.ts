import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  attendanceFilterForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }

  initializeForm(): void {
    this.attendanceFilterForm = this.fb.group(
      {
        departmentId: [0],
        employeeId: [0],
        workLocation: [0],
        startDate: [null],
        endDate: [null],
      }
    );
  }
  getFormValue() {
    return this.attendanceFilterForm.value;
  }
}
