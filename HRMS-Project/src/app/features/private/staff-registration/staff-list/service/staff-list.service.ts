import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StaffList } from '../model/staff-list';
import { StaffDetails } from '../../add-staff/model/add-staff';

@Injectable({
  providedIn: 'root',
})
export class StaffListService {
  private apiUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}
  getStaffList(): Observable<StaffList[]> {
    return this.http.get<StaffList[]>(this.apiUrl);
  }
  deleteStaff(id: number | string): Observable<StaffList> {
    return this.http.delete<StaffList>(`${this.apiUrl}/${id}`);
  }
  editStaff(id: string | number): Observable<StaffList> {
    return this.http.get<StaffList>(`${this.apiUrl}/${id}`);
  }
  updateStaff(id: number | string, staff: StaffDetails): Observable<boolean> {
    return this.http.put<boolean>(`${this.apiUrl}/${id}`, staff);
  }
}
