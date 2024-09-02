import { apiConstants } from './../../../../../shared/constants/api.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseType } from '../../../../../shared/models/response.model';
import {
  EmployeeLeaveListResponse,
  LeaveRequests,
} from '../../types/leave-summary.interface';
import { baseUrl } from '../../../../../shared/constants/global.constants';
import {
  DAY_DATA,
  DayData,
  getTodayDate,
} from '../../../../../shared/utils/date-today';

@Injectable({
  providedIn: 'root',
})
export class LeaveSummaryService {
  constructor(private http: HttpClient) {}

  today = DAY_DATA;

  tomorrow = {
    ...DAY_DATA,
    toDate: getTodayDate(1),
  };

  getAllUsersPendingLeaveRequests(): Observable<ResponseType<LeaveRequests[]>> {
    return this.http.get<ResponseType<LeaveRequests[]>>(
      baseUrl + apiConstants.attendance.getEmployeePendingLeaveRequests
    );
  }

  //TODO
  getStaffsOnLeaveToday(
    today: DayData
  ): Observable<ResponseType<EmployeeLeaveListResponse[]>> {
    return this.http.post<ResponseType<EmployeeLeaveListResponse[]>>(
      baseUrl + apiConstants.attendance.getEmployeeAllLeaveRequestList,
      today
    );
  }

  //TODO
  getStaffsOnLeaveTomorrow(): Observable<
    ResponseType<EmployeeLeaveListResponse[]>
  > {
    return this.http.get<ResponseType<EmployeeLeaveListResponse[]>>(
      baseUrl + apiConstants.attendance.getEmployeeAllLeaveRequestList
    );
  }
}
