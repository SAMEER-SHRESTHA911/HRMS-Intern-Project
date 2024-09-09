import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '@shared/constants/global.constants';
import { apiConstants } from '@shared/constants/api.constants';
import { ResponseType } from '@shared/models/response.model';
import {
  AttendanceData,
  AttendanceRequestPayload,
  EmployeeAttendanceRecord,
} from '../../model/attendance-details.interface';

@Injectable({
  providedIn: 'root',
})
export class AttendanceDetailsService {
  private apiUrl = `${baseUrl}${apiConstants.attendance.getAttandanceList}`;
  private attendanceByIdUrl = `${baseUrl}${apiConstants.attendance.getAttendanceByEmployeeId}`;
  constructor(private http: HttpClient) {}

  getAttendanceList(
    payload: AttendanceRequestPayload | {}
  ): Observable<ResponseType<AttendanceData>> {
    return this.http.post<ResponseType<AttendanceData>>(this.apiUrl, payload);
  }
  getAttendanceListById(
    payload: AttendanceRequestPayload
  ): Observable<ResponseType<AttendanceData>> {
    return this.http.post<ResponseType<AttendanceData>>(
      this.attendanceByIdUrl,
      payload
    );
  }
}
