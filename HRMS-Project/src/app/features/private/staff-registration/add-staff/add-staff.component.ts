import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDatepickerControl,
  MatDatepickerPanel,
} from '@angular/material/datepicker';
import { AddStaffService } from './service/add-staff.service';
import { StaffDetails } from './model/add-staff';
import { select, Store } from '@ngrx/store';
import { addStaff } from './store/add-staff.actions';
import { Observable } from 'rxjs';
import {
  selectAllStaff,
  selectStaffLoading,
  selectStaffError,
} from './store/add-staff.selector';
import { StaffState } from './store/add-staff.state';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrl: './add-staff.component.scss',
})
export class AddStaffComponent implements OnInit {
  hide = true;
  registrationForm!: FormGroup;
  picker1!: MatDatepickerPanel<MatDatepickerControl<any>, any, any>;
  staff$: Observable<StaffDetails[]> = this.store.pipe(select(selectAllStaff));
  loading$: Observable<boolean> = this.store.pipe(select(selectStaffLoading));
  error$: Observable<string | null> = this.store.pipe(select(selectStaffError));

  constructor(
    private fb: FormBuilder,
    private apiService: AddStaffService,
    private store: Store<StaffState>
  ) {}
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
  onSubmit(): void {
    if (this.registrationForm.valid) {
      const staffDetails: StaffDetails = this.registrationForm.value;

      this.store.dispatch(addStaff({ staff: staffDetails }));
      this.registrationForm.reset();
    } else {
      console.log('Form is not valid');
    }
  }
}
