import { createSelector, createFeatureSelector } from '@ngrx/store';
import { StaffState } from './add-staff.state';
import { selectCountryState } from '@shared/store/add-staff-dropdowns/country/country.selector';
import { selectAllCities } from '@shared/store/add-staff-dropdowns/city/city.selector';
import { selectAllDepartments } from '@shared/store/add-staff-dropdowns/department/department.selector';
import { selectAddress } from '@shared/store/address-by-Id/address.selector';
import { getDate } from '../transformer/staff-register-payload.transformer';
import { selectAllRoles, selectRoleState } from '@shared/store/add-staff-dropdowns/role/role.selctor';

export const selectStaffState = createFeatureSelector<StaffState>('staffss');
export const selectStaffDetails = createSelector(
  selectStaffState,
  (state: StaffState) => state.staffDetails
);

export const selectStaffLoading = createSelector(
  selectStaffState,
  (state: StaffState) => state.loading
);

export const selectStaffError = createSelector(
  selectStaffState,
  (state: StaffState) => state.error
);


export const selectToPatchStaffData = createSelector(
  selectStaffDetails,
  selectCountryState,
  selectAllCities,
  selectAllDepartments,
  selectAddress,
  selectAllRoles,
  (staff, countries, cities, deparments, address, roles) => {
    console.log(countries, deparments.find(deparment => deparment.id === staff?.departmentId))
    console.log({
      firstName: staff?.firstName,
      middleName: staff?.middleName,
      lastName: staff?.lastName,
      mobileNo: staff?.mobileNo,
      gender: staff?.gender,
      dob: getDate(staff?.dob ?? ''),
      address: address?.name,
      nationality: staff?.nationality,
      citizenshipNo: staff?.citizenshipNo,
      startDate: getDate(staff?.startDate ?? ''),
      departmentId: deparments.find(deparment => deparment.id === staff?.departmentId),
      role: roles.find(role => role.value === staff?.role),
      email: staff?.email,
      city: cities.find(city => city.id === address?.cityId)?.name,
      country: countries.countries.find(country => country.id === address?.countryId),
    })
    debugger
    return {
      firstName: staff?.firstName,
      middleName: staff?.middleName,
      lastName: staff?.lastName,
      mobileNo: staff?.mobileNo,
      gender: staff?.gender,
      dob: staff?.dob,
      address: address?.name,
      nationality: staff?.nationality,
      citizenshipNo: staff?.citizenshipNo,
      startDate: staff?.startDate,
      department: deparments.find(deparment => deparment.id === staff?.departmentId),
      role: staff?.role,
      email: staff?.email,
      city: cities.find(city => city.id === address?.cityId),
      country: countries.countries.find(country => country.id === address?.countryId),
    }
  }
);
