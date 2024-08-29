import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaveTypeDropDownResponse } from '../../store/leave-type-dropdown/leave-type.state';

@Injectable({
  providedIn: 'root',
})
export class LeaveTypeDropdownService {
  private apiUrl = `http://localhost:3000/DayLeave`;

  constructor(private http: HttpClient) {}

  getLeaveTypeDropdown(): Observable<LeaveTypeDropDownResponse> {
    return this.http.get<LeaveTypeDropDownResponse>(this.apiUrl);
  }
}
