import { Component, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-staff-registration',
  templateUrl: './staff-registration.component.html',
  styleUrl: './staff-registration.component.scss',
})
export class StaffRegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.registrationForm = this.fb.group({
      id: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required]],
      midName: [''],
      lastName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      address: ['', [Validators.required]],
      nationality: ['', [Validators.required]],
      citizenshipNumber: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      department: ['', [Validators.required]],
      role: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  onSubmit() {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      console.log('Form Submitted:', formData);
      this.registrationForm.reset();
    }
  }
  clearErrors() {}
}
