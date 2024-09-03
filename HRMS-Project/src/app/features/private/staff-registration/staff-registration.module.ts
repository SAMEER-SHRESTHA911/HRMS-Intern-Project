import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRegistrationRoutingModule } from './staff-registration-routing.module';
import { StaffRegistrationComponent } from './staff-registration.component';
import { MaterialsModule } from '../../../materials/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StaffEffects } from './add-staff/store/add-staff.effects';
import { staffReducer } from './add-staff/store/add-staff.reducer';
import { StaffListEffects } from './staff-list/store/staff-list.effects';
import { staffListReducer } from './staff-list/store/staff-list.reducer';
import { DialogComponent } from '../../../shared/components/dialog/dialog.component';
import { countryReducer } from '../../../shared/store/add-staff-dropdowns/country/country.reducer';
import { CountryEffects } from '../../../shared/store/add-staff-dropdowns/country/country.effects';
import { DepartmentEffects } from '../../../shared/store/add-staff-dropdowns/department/department.effects';
import { departmentReducer } from '../../../shared/store/add-staff-dropdowns/department/department.reducer';
import { CityEffects } from '../../../shared/store/add-staff-dropdowns/city/city.effect';
import { cityReducer } from '../../../shared/store/add-staff-dropdowns/city/city.reducer';
import { RolesEffects } from '../../../shared/store/add-staff-dropdowns/role/role.effect';
import { roleReducer } from '../../../shared/store/add-staff-dropdowns/role/role.reducer';
import { deleteStaffEffects } from './staff-list/store/delete-store/delete-staff.effect';
import { deleteEmployeeReducer } from './staff-list/store/delete-store/delete-staff.reducer';

@NgModule({
  declarations: [
    StaffRegistrationComponent,
    AddStaffComponent,
    StaffListComponent,
    DialogComponent,
  ],
  imports: [
    CommonModule,
    StaffRegistrationRoutingModule,
    MaterialsModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('staff', staffReducer),
    StoreModule.forFeature('staffList', staffListReducer),
    EffectsModule.forFeature([
      StaffEffects,
      StaffListEffects,
      CountryEffects,
      DepartmentEffects,
      CityEffects,
      RolesEffects,
      deleteStaffEffects

    ]),
    StoreModule.forFeature('country', countryReducer),
    StoreModule.forFeature('department', departmentReducer),
    StoreModule.forFeature('city', cityReducer),
    StoreModule.forFeature('roles', roleReducer),
    StoreModule.forFeature('deleteStaff', deleteEmployeeReducer)
  ],
})
export class StaffRegistrationModule { }
