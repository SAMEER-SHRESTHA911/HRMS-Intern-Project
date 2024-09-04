import { CountryData } from "../../../../../shared/models/country.interface";

export interface StaffDetailsFormValue {
  mobileNo: string;
  address: string;
  citizenshipNo: string;
  city: number;
  confirmPassword: string;
  country: CountryData;
  departmentId: number;
  dob: string;
  email: string;
  firstName: string;
  gender: number;
  lastName: string;
  middleName: string;
  nationality: string;
  password: string;
  role: number;
  startDate: string;
}

export interface RegisterStaffPayload {
  firstName: string;
  lastName: string;
  middleName: string;
  mobileNo: string;
  address: Address;
  email: string;
  citizenshipNo: string;
  dob: string;
  departmentId: number;
  role: number;
  gender: number;
  nationality: string;
  startDate: string;
  password: string;
  confirmPassword: string;
}

export interface Address {
  name: string;
  countryId: number;
  cityId: number;
}
export interface GetEmployeeDetails {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  mobileNo: string;
  addressId: number;
  email: string;
  citizenshipNo: string;
  dob: string;
  departmentId: number;
  role: string;
  gender: number;
  nationality: string;
  startDate: string;
}
