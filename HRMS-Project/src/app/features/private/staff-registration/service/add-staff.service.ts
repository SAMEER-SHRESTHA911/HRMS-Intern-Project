import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StaffDetails } from '../model/add-staff';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddStaffService {
  private apiUrl = 'http://localhost:3000/Users';
  constructor(private http: HttpClient) {}
  postStaff(staff: StaffDetails): Observable<StaffDetails> {
    return this.http.post<StaffDetails>(this.apiUrl, staff);
  }
}
