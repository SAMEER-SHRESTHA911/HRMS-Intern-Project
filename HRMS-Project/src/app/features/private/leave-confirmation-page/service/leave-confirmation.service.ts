import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LeaveRequestList, LeaveRequestListResponse } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class LeaveConfirmationService {

  private baseUrl = "http://localhost:3000/requestList";

  constructor(private http:HttpClient) { }

  fetchRequestList(): Observable<LeaveRequestList[]> {
    return this.http.get<LeaveRequestListResponse>(this.baseUrl).pipe(
      map((response) => {
        console.log('API responsea', response);
        if (response && response.data && response.data.employeeLeaveRequestResponse) {
          return response.data.employeeLeaveRequestResponse;
        }
        return [];
      })
    );
  }
  
}
