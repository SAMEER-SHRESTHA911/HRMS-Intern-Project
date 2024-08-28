import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, of, switchMap } from 'rxjs';
import { StaffDetails } from './model/add-staff';
import { FormService } from './service/form/form.service';
import {
  MatDatepickerControl,
  MatDatepickerPanel,
} from '@angular/material/datepicker';
import { addStaff } from './store/add-staff.actions';
import {
  selectAllStaff,
  selectStaffError,
  selectStaffLoading,
} from './store/add-staff.selector';
import { StaffState } from './store/add-staff.state';
import { editStaffDetails } from '../staff-list/store/staff-list.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffListService } from '../staff-list/service/staff-list.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrl: './add-staff.component.scss',
})
export class AddStaffComponent implements OnInit {
  passwordHide = true;
  confirmPasswordHide = true;
  isEditMode: boolean = false;
  staffId: number | string | null = null;
  maxDate!: Date;
  maxStartDate!: Date;

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
    private staffListService: StaffListService,
    private store: Store<StaffState>,

    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.formService.initializeForm();
    this.selectorInitializer();
    this.initializeEditMode();
    this.setMaxDateForDob();
    this.setMaxStartDate();
  }
  setMaxDateForDob(): void {
    const today = new Date();
    this.maxDate = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate()
    );
  }
  setMaxStartDate(): void {
    this.maxStartDate = new Date();
  }
  getRandomNumber(): number {
    return Math.floor(100 + Math.random() * 900);
  }

  private initializeEditMode(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const id = params.get('id');
          this.isEditMode = !!id;
          this.staffId = id ? +id : null;

          if (this.isEditMode && this.staffId !== null) {
            this.loadStaffList(this.staffId);
          }
          return of(null);
        })
      )
      .subscribe();
  }
  private loadStaffList(id: number): void {
    this.staffListService.editStaff(id).subscribe((data) => {
      if (data) {
        this.registrationForm.patchValue(data);
      }
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const staffDetails: StaffDetails = {
        ...this.registrationForm.value,
        id: this.getRandomNumber(),
      };

      if (this.isEditMode && this.staffId !== null) {
        this.store.dispatch(
          editStaffDetails({ id: this.staffId, staff: staffDetails })
        );
      } else {
        this.store.dispatch(addStaff({ staff: staffDetails }));
      }

      this.router.navigate(['/admin/staff-registration/staff-list']);
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }
  onCancelEdit(): void {
    this.router.navigate(['/admin/staff-registration/staff-list']);
  }
  selectorInitializer(): void {
    this.staff$ = this.store.pipe(select(selectAllStaff));
    this.loading$ = this.store.pipe(select(selectStaffLoading));
    this.error$ = this.store.pipe(select(selectStaffError));
  }
}
