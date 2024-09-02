import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseType } from '../../../../../shared/models/response.model';
import { LeaveRequests } from '../../types/leave-summary.interface';
import { baseUrl } from '../../../../../shared/constants/global.constants';

@Injectable({
  providedIn: 'root',
})
export class LeaveSummaryService {
  constructor(private http: HttpClient) {}
  private apiUrl =
    '/attendanceLeave/LeaveRequest/GetEmployeeLeaveRequestListWithoutFilter';

  getAllUsersPendingLeaveRequests(): Observable<ResponseType<LeaveRequests[]>> {
    return this.http.get<ResponseType<LeaveRequests[]>>(baseUrl + this.apiUrl);
  }

  //TODO
  getStaffsOnLeaveToday() {}

  //TODO
  getStaffsOnLeaveTomorrow() {}
}
