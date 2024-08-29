import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LeaveAvailableData, LeaveTableData, LeaveTableResponse } from '../../types/leave-table';

@Injectable({
  providedIn: 'root'
})
export class LeaveTableService {

  //previous API_URL
  // private fetchLeaveApiUrl = "http://localhost:3000/leaveTable";
  // private fetchEmployeeLeaveRequestResponse = "http://localhost:3000/GetEmployeeLeaveRequestList";
  
  //Jha Ji
  // private fetchEmployeeLeaveRequestResponse = "https://53x7mkhh-1595.inc1.devtunnels.ms/apigateway/attendanceLeave/LeaveRequest/GetLeaveRequestList";
  
  //Abhisha 
  private fetchEmployeeLeaveRequestResponse = "https://sgbvkfhd-1595.inc1.devtunnels.ms/apigateway/attendanceLeave/LeaveRequest/GetLeaveRequestList";
  
  private fetchLeaveDataStatus = "http://localhost:3000/leaveAvailableData";
  

  constructor(private http:HttpClient) { 
  }
  editLeaveApplyStatus(){}

  getLeaveAvailableData():Observable<LeaveAvailableData[]>{
    return this.http.get<LeaveAvailableData[]>(this.fetchLeaveDataStatus);
  }

  getLeaveTableData(): Observable<{ message: string; leaveData : LeaveTableData[]}>{
    return this.http.get<LeaveTableResponse>(this.fetchEmployeeLeaveRequestResponse).pipe(
      map(response => ({
        message: response.message,
        leaveData : response.data.employeeLeaveRequestResponse
      }))
    );
  }
}