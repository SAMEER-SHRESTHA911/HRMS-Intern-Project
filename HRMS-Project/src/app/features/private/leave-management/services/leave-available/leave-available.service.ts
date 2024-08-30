import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loggedInUser } from '../../../../../shared/constants/global.constants';
import { map, Observable } from 'rxjs';
import { LeaveBalanceData, LeaveBalanceResponse } from '../../types/leave-table';

@Injectable({
  providedIn: 'root'
})
export class LeaveAvailableService {

  private  apiUrl = 'http://localhost:5262/apigateway/attendanceLeave/LeaveBalance/GetLeaveBalanceofEmp?empId=';


  constructor(private http:HttpClient) { }

  getLeaveAvailableData():Observable<{ message: string;  leaveBalanceData: LeaveBalanceData[] }> {

    return this.http.get<LeaveBalanceResponse>(`${this.apiUrl}${loggedInUser.id}`).pipe(
      map((response) => ({
        message: response.message,
        leaveBalanceData: response.leaveBalanceData
      }))
    )
  }
}
