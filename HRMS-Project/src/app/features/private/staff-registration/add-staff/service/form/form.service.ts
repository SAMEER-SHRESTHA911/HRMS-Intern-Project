import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { passwordMatchValidator } from '@shared/validators/passwordMatch/password-match.validator';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  registrationForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }

  initializeForm(): void {
    this.registrationForm = this.fb.group(
      {
        firstName: ['', [Validators.required]],
        middleName: [''],
        lastName: ['', [Validators.required]],
        mobileNo: ['', [Validators.required]],
        gender: ['', [Validators.required]],
        dob: ['', [Validators.required]],
        address: ['', [Validators.required]],
        nationality: ['', [Validators.required]],
        citizenshipNo: ['', [Validators.required]],
        startDate: ['', [Validators.required]],
        department: ['', [Validators.required]],
        role: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
        city: ['', [Validators.required]],
        country: ['', [Validators.required]],
      },
      { validators: [passwordMatchValidator()] }
    );
  }

  resetForm(): void {
    this.registrationForm.reset();
  }
  nagivateTo(): void {
    this.router.navigate(['/admin/staff-registration/staff-list']);

  }
}
