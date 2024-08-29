import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaveApplyBody } from '../../types/leave-apply';

@Injectable({
  providedIn: 'root',
})
export class LeaveApplyApiService {
  private leaveApplyApiUrl = 'http://localhost:3000/leaveApply';

  constructor(private http: HttpClient) {}

  addLeaveRequest(body: LeaveApplyBody): Observable<LeaveApplyBody> {
    return this.http.post<LeaveApplyBody>(this.leaveApplyApiUrl, body);
  }
  fetchEditLeaveData(id: string | number): Observable<LeaveApplyBody> {
    return this.http.get<LeaveApplyBody>(`${this.leaveApplyApiUrl}/${id}`);
  }
}
