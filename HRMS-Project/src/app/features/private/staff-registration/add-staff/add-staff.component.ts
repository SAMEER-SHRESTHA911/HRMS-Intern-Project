import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDatepickerControl,
  MatDatepickerPanel,
} from '@angular/material/datepicker';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrl: './add-staff.component.scss',
})
export class AddStaffComponent implements OnInit {
  registrationForm!: FormGroup;
  picker1!: MatDatepickerPanel<MatDatepickerControl<any>, any, any>;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.registrationForm = this.fb.group({
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
      alert('Form submitted sucessfully');
      this.registrationForm.reset();
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }
  clearErrors() {}
}
