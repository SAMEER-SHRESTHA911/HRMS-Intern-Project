import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaveTypeDropDownResponse } from '../../store/leave-type-dropdown/leave-type.state';

@Injectable({
  providedIn: 'root',
})
export class LeaveTypeDropdownService {
  // private apiUrl = `http://localhost:3000/LeaveType`;
  private apiUrl = `http://localhost:5262/apigateway/attendanceLeave/EnumData/GetAllLeaveType`;

  constructor(private http: HttpClient) {}

  getLeaveTypeDropdown(): Observable<LeaveTypeDropDownResponse> {
    return this.http.get<LeaveTypeDropDownResponse>(this.apiUrl);
  }
}
