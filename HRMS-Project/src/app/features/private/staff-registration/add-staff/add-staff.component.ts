import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  MatDatepickerControl,
  MatDatepickerPanel,
} from '@angular/material/datepicker';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { StaffDetails } from './model/add-staff';
import { FormService } from './service/form/form.service';
import { addStaff } from './store/add-staff.actions';
import {
  selectAllStaff,
  selectStaffError,
  selectStaffLoading,
} from './store/add-staff.selector';
import { StaffState } from './store/add-staff.state';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrl: './add-staff.component.scss',
})
export class AddStaffComponent implements OnInit {
  hide = true;

  picker1!: MatDatepickerPanel<MatDatepickerControl<any>, any, any>;
  staff$: Observable<StaffDetails[]> = of([]);
  loading$: Observable<boolean> = of(false);
  error$: Observable<string | null> = of(null);

  get registrationForm(): FormGroup {
    return this.formService.registrationForm;
  }
  set registrationForm(form: FormGroup) {
    this.formService.registrationForm = form;
  }
  constructor(
    private formService: FormService,
    private store: Store<StaffState>
  ) {}
  ngOnInit(): void {
    this.formService.initializeForm();
    this.selectorInitializer();
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const staffDetails: StaffDetails = this.registrationForm.value;

      this.store.dispatch(addStaff({ staff: staffDetails }));
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }
  selectorInitializer(): void {
    this.staff$ = this.store.pipe(select(selectAllStaff));
    this.loading$ = this.store.pipe(select(selectStaffLoading));
    this.error$ = this.store.pipe(select(selectStaffError));
  }
}
