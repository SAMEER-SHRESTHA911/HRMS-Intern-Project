import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { leaveTableData } from '../types/leave-table';

@Injectable({
  providedIn: 'root'
})
export class LeaveTableService {

  private apiUrl = "http://localhost:3000/leaveTable"
  constructor(private http:HttpClient) { 

  }

  getLeaveTableData():Observable<leaveTableData>{
    return this.http.get<leaveTableData>(this.apiUrl);
  }
}
