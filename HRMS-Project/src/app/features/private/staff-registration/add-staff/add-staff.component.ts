import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDatepickerControl,
  MatDatepickerPanel,
} from '@angular/material/datepicker';
import { AddStaffService } from '../service/add-staff.service';
import { StaffDetails } from '../model/add-staff';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrl: './add-staff.component.scss',
})
export class AddStaffComponent implements OnInit {
  hide = true;
  registrationForm!: FormGroup;
  picker1!: MatDatepickerPanel<MatDatepickerControl<any>, any, any>;
  addStaffService: any;
  constructor(private fb: FormBuilder, private apiService: AddStaffService) {}
  ngOnInit() {
    this.initializeForm();
  }
  initializeForm() {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required]],
      midName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
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
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }
  onSubmit() {
    if (this.registrationForm.valid) {
      alert('Form submitted sucessfully');
      this.registrationForm.reset();
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }
  postEmployeeData() {
    const formData: StaffDetails = this.registrationForm.value;

    this.addStaffService.postStaff(formData).subscribe({});
  }
  // getData() {
  //   this.apiService.getStaff().subscribe((data) => {
  //     console.log(data);
  //   });
  // }

  clearErrors() {}
}
