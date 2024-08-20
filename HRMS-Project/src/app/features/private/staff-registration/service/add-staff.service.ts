import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StaffDetails } from '../model/add-staff';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddStaffService {
  private apiUrl = 'staffdetails.json';
  constructor(private http: HttpClient) {}
  getStaff(): Observable<StaffDetails[]> {
    return this.http.get<StaffDetails[]>(this.apiUrl);
  }
}
