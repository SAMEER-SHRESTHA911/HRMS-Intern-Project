import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  registrationForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  initializeForm(): void {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required]],
      midName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      address: ['', [Validators.required]],
      nationality: ['', [Validators.required]],
      citizenshipNumber: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      department: ['', [Validators.required]],
      role: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  resetForm(): void {
    this.registrationForm.reset();
  }
}
