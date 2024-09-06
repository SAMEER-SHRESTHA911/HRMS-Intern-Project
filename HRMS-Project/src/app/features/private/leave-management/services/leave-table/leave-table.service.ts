import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  LeaveAvailableData,
  LeaveTableData,
  LeaveTableResponse,
} from '../../types/leave-table';

@Injectable({
  providedIn: 'root',
})
export class LeaveTableService {
  private fetchEmployeeLeaveRequestResponse =
    'http://localhost:5262/apigateway/attendanceLeave/LeaveRequest/GetLeaveRequestByEmpId?id=';
  // private fetchEmployeeLeaveRequestResponse = "http://localhost:5262/apigateway/attendanceLeave/LeaveRequest/GetLeaveRequestList";

  // private fetchLeaveDataStatus = 'http://localhost:3000/leaveAvailableData';

  constructor(private http: HttpClient) {}
  editLeaveApplyStatus() {}

  // getLeaveAvailableData(): Observable<LeaveAvailableData[]> {
  //   return this.http.get<LeaveAvailableData[]>(this.fetchLeaveDataStatus);
  // }

  getLeaveTableData(
    id: string | null
  ): Observable<{ message: string; leaveData: LeaveTableData[] }> {
    return this.http
      .get<LeaveTableResponse>(`${this.fetchEmployeeLeaveRequestResponse}${id}`)
      .pipe(
        map((response) => ({
          message: response.message,
          leaveData: response.data,
        }))
      );
  }
}
