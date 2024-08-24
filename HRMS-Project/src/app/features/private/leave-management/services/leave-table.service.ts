import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaveAvailableData, LeaveTableData } from '../types/leave-table';

@Injectable({
  providedIn: 'root'
})
export class LeaveTableService {

  private fetchLeaveApiUrl = "http://localhost:3000/leaveTable";
  private fetchLeaveDataStatus = "http://localhost:3000/leaveAvailableData";

  constructor(private http:HttpClient) { 
  }

  getLeaveAvailableData():Observable<LeaveAvailableData>{
    return this.http.get<LeaveAvailableData>(this.fetchLeaveDataStatus);
  }

  getLeaveTableData():Observable<LeaveTableData[]>{
    return this.http.get<LeaveTableData[]>(this.fetchLeaveApiUrl);
  }
}
