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
  private editLeaveApplySttaus = "http://localhost:3000/leaveApply"

  constructor(private http:HttpClient) { 
  }

  editLeaveApplyStatus(){}

  getLeaveAvailableData():Observable<LeaveAvailableData[]>{
    return this.http.get<LeaveAvailableData[]>(this.fetchLeaveDataStatus);
  }

  getLeaveTableData():Observable<LeaveTableData[]>{
    return this.http.get<LeaveTableData[]>(this.fetchLeaveApiUrl);
  }
}
