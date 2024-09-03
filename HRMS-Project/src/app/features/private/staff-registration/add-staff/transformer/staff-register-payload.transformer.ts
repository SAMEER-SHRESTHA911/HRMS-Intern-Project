import { RegisterStaffPayload, StaffDetailsFormValue } from '../model/add-staff';

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