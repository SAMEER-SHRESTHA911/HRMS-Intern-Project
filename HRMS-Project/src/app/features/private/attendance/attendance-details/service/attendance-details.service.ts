import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '@shared/constants/global.constants';
import { apiConstants } from '@shared/constants/api.constants';
import { ResponseType } from '@shared/models/response.model';
import { AttendanceRequestPayload, EmployeeAttendanceRecord } from '../../model/attendance-details.interface';

@Injectable({
  providedIn: 'root',
})
export class AttendanceDetailsService {
  private apiUrl = `${baseUrl}${apiConstants.attendance.getAttandanceList}`;

  constructor(private http: HttpClient) { }

  getAttendanceList(payload: AttendanceRequestPayload): Observable<ResponseType<EmployeeAttendanceRecord[]>> {
    return this.http.post<ResponseType<EmployeeAttendanceRecord[]>>(this.apiUrl, payload);
  }
}
