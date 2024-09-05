import { Component, OnInit } from '@angular/core';
import {
  FormGroup
} from '@angular/forms';
import {
  MatDatepickerControl,
  MatDatepickerPanel,
} from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of, switchMap } from 'rxjs';
import { RoleData } from '../../../../shared/models/role.interface';
import { loadCities } from '../../../../shared/store/add-staff-dropdowns/city/city.actions';
import { selectAllCities } from '../../../../shared/store/add-staff-dropdowns/city/city.selector';
import { loadRoles } from '../../../../shared/store/add-staff-dropdowns/role/role.actions';
import { selectAllRoles } from '../../../../shared/store/add-staff-dropdowns/role/role.selctor';
import { } from '../staff-list/store/staff-list.actions';
import { StaffDetailsFormValue } from './model/add-staff';
import { FormService } from './service/form/form.service';
import { addStaff, fetchEmployeeData } from './store/add-staff.actions';
import {
  selectStaffError,
  selectStaffLoading,
} from './store/add-staff.selector';
import { StaffState } from './store/add-staff.state';
import { convertToStaffPayload } from './transformer/staff-register-payload.transformer';
import { updateEmployee } from './store/update-staff/update-staff.action';
import { StaffListService } from '../staff-list/service/staff-list.service';
import { CountryData } from '@shared/models/country.interface';
import { selectAllCountries } from '@shared/store/add-staff-dropdowns/country/country.selector';
import { loadCountries } from '@shared/store/add-staff-dropdowns/country/country.actions';
import { loadDepartments } from '@shared/store/add-staff-dropdowns/department/department.actions';
import { DepartmentData } from '@shared/models/department.interface';
import { selectAllDepartments } from '@shared/store/add-staff-dropdowns/department/department.selector';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrl: './add-staff.component.scss',
})
export class AddStaffComponent implements OnInit {
  passwordHide = true;
  confirmPasswordHide = true;
  isEditMode: boolean = false;
  staffId: number | null = null;
  maxDate!: Date;
  maxStartDate!: Date;

  picker1!: MatDatepickerPanel<MatDatepickerControl<unknown>, unknown, unknown>;
  staff$: Observable<StaffDetailsFormValue[]> = of([]);
  loading$: Observable<boolean> = of(false);
  error$: Observable<string | null> = of(null);
  countries$: Observable<CountryData[]> = of([]);
  departments$: Observable<DepartmentData[]> = of([]);
  cities$: Observable<DepartmentData[]> = of([]);
  roles$: Observable<RoleData[]> = of([])

  selectedCountry!: CountryData;
  selectedCity!: string;
  selectedDepartments!: string;


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
  ) { }

  ngOnInit(): void {
    this.formService.initializeForm();
    this.selectorInitializer();
    this.initializeEditMode();
    this.setMaxDateForDob();
    this.setMaxStartDate();
    this.getCountryList();
    this.getDeparmentList();
    this.getRoleList();
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

  getDeparmentList(): void {
    this.store.dispatch(loadDepartments());
  }
  getRoleList(): void {
    this.store.dispatch(loadRoles());
  }

  getCountryList(): void {
    this.store.dispatch(loadCountries());
  }

  getCityListByCountryId(countryId: CountryData): void {
    this.selectedCountry = countryId;
    this.store.dispatch(loadCities({ countryId: this.selectedCountry.id }));
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

  onSubmit(): void {

    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }

    const updatedData = convertToStaffPayload(this.registrationForm.value);
    console.log(this.registrationForm)
    console.log(updatedData)

    if (this.isEditMode && this.staffId !== null) {
      this.store.dispatch(
        updateEmployee({ employeeId: this.staffId, updatedData })
      );
    } else {
      this.store.dispatch(addStaff({ staff: updatedData }));
    }

  }

  onCancelEdit(): void {
    this.router.navigate(['/admin/staff-registration/staff-list']);
  }

  selectorInitializer(): void {
    this.loading$ = this.store.pipe(select(selectStaffLoading));
    this.error$ = this.store.pipe(select(selectStaffError));
    this.countries$ = this.store.select(selectAllCountries);
    this.departments$ = this.store.select(selectAllDepartments);
    this.cities$ = this.store.select(selectAllCities);
    this.roles$ = this.store.select(selectAllRoles)


  }

  private loadStaffList(id: number): void {

    this.store.dispatch(fetchEmployeeData({ staffId: id }))
  }
}
