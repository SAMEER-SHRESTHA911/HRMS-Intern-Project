import { GetEmployeeDetails, RegisterStaffPayload, StaffDetailsFormValue } from '../model/add-staff';

export const convertToStaffPayload = (staff: StaffDetailsFormValue): RegisterStaffPayload => ({
    firstName: staff?.firstName,
    lastName: staff?.lastName,
    middleName: staff?.middleName,
    mobileNo: staff?.mobileNo?.toString(),
    address: {
        name: staff?.address,
        countryId: staff?.country?.id,
        cityId: staff?.city,
    },
    email: staff.email,
    citizenshipNo: staff.citizenshipNo,
    dob: staff.dob,
    departmentId: staff.departmentId,
    role: staff.role,
    gender: +staff.gender,
    nationality: staff.nationality,
    startDate: staff.startDate,
    password: staff.password,
    confirmPassword: staff.confirmPassword,
});
export function convertToStaffFormDetails(employee: GetEmployeeDetails): StaffDetailsFormValue {
    return {
        mobileNo: employee.mobileNo,
        address: '',
        citizenshipNo: employee.citizenshipNo,
        city: employee.addressId,
        confirmPassword: '',
        country: { id: 0, name: '', code: '' },
        departmentId: employee.departmentId,
        dob: getDate(employee.dob),
        email: employee.email,
        firstName: employee.firstName,
        gender: employee.gender,
        lastName: employee.lastName,
        middleName: employee.middleName,
        nationality: employee.nationality,
        password: '',
        role: employee.role === 'Admin' ? 1 : 2,
        startDate: getDate(employee.startDate),
    };
}
export function getDate(date: string): string {

    const [month, day, year] = date.split(" ")[0].split("/");
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;

}