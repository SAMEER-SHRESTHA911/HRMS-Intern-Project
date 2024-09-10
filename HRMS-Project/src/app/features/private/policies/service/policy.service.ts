import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Policy } from '../models/policy.model';
import { baseUrl } from '@shared/constants/global.constants';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
private apiUrl = `${baseUrl}/api/policies`;

  constructor(private http: HttpClient) {}

  getPolicies(): Observable<any> {
    return this.http.get<any>(`${ baseUrl}/attendanceLeave/Policy/GetAllPolicy`);
  }

  getPolicy(id: number): Observable<Policy> {
    return this.http.get<Policy>(`${baseUrl}/attendanceLeave/Policy/GetAllPolicy`);
  }

  addPolicy(policy: Policy): Observable<Policy> {
    return this.http.post<Policy>(`${baseUrl}/attendanceLeave/Policy/CreatePolicy`, policy);
  }

  editPolicy(policy: Policy): Observable<Policy> {
    return this.http.put<Policy>(`${baseUrl}/attendanceLeave/Policy/UpdatePolicy`, policy);
  }

  deletePolicy(id: number): Observable<void> {
    const params = new HttpParams().set(
      'id', id
    )
    return this.http.delete<void>(`${baseUrl}/attendanceLeave/Policy/DeletePolicy`, {params});
  }
}

