import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StaffList } from '../model/staff-list';

@Injectable({
  providedIn: 'root',
})
export class StaffListService {
  private apiUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}
  getStaffList(): Observable<StaffList[]> {
    return this.http.get<StaffList[]>(this.apiUrl);
  }
}
