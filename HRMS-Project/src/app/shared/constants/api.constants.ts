export const apiConstants = Object.freeze({
  registerEmployee: '/user/Employee/RegisterEmployee',
  getEmployeeList: '/user/HttpUser/GetRegisterEmployeeList',
  getCountryList: '/user/Country/GetCountryList',
  getCityList: '/user/City/GetCityList',
  getDepartmentList: '/user/HttpUser/GetDepartmentList',

  attendance: Object.freeze({
    getCheckInStatus: '/attendanceLeave/Attendance/CheckCheckInStatus',
    postCheckIn: '/attendanceLeave/Attendance/CheckIn',
    postCheckOut: '/attendanceLeave/Attendance/CheckOut',
    getTodaysAttendanceSummary:
      '/api/Attendance/GetCurrentDayAttendanceSummary',
    getEmployeePendingLeaveRequests:
      // '/attendanceLeave/LeaveRequest/GetEmployeeLeaveRequestListWithoutFilter',
      '/api/LeaveRequest/GetEmployeeLeaveRequestListWithoutFilter',
    getEmployeeAllLeaveRequestList:
      '/attendanceLeave/LeaveRequest/GetEmployeeLeaveRequestList',
  }),
});
