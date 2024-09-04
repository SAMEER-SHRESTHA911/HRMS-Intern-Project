export const apiConstants = Object.freeze({
  registerEmployee: '/user/Employee/RegisterEmployee',
  getCountryList: '/user/Country/GetCountryList',
  getCityListByCountryId: '/user/City/GetCityByCountryId',
  getDepartmentList: '/user/Department/GetDepartmentList',
  getEmployeeList: '/user/Employee/GetRegisterEmployeeList',
  getEmployeeById: '/user/Employee/GetRegisterEmployeeDetailById',
  updateEmployee: '/user/Employee/UpdateRegisterEmployee',
  getRolesList: '/user/Employee/GetAllRoles',
  deleteEmployeeDetails: '/user/Employee/DeleteRegisterEmployee',


  attendance: Object.freeze({
    getCheckInStatus: '/attendanceLeave/Attendance/CheckCheckInStatus',
    postCheckIn: '/attendanceLeave/Attendance/CheckIn',
    postCheckOut: '/attendanceLeave/Attendance/CheckOut',
    getTodaysAttendanceSummary:
      '/attendanceLeave/Attendance/GetCurrentDayAttendanceSummary',
    getEmployeePendingLeaveRequests:
      '/attendanceLeave/LeaveRequest/GetEmployeeLeaveRequestListWithoutFilter',
    getEmployeeAllLeaveRequestList:
      '/attendanceLeave/LeaveRequest/GetEmployeeLeaveRequestList',
    getEmployeeLeaveRequestAccordingToDateAndStatus:
      '/attendanceLeave/LeaveRequest/GetLeaveRequestAccordingToDateAndStatus',
  }),

  employeeDetails: Object.freeze({
    getEmployeeDetailById: '/user/Employee/GetRegisterEmployeeDetailById',
  }),
});
