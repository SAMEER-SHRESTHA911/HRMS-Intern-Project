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
    console.log('So i am inside post Boss!');
    return this.http.post<LeaveApplyBody>(this.leaveApplyApiUrl, body);
  }
}
