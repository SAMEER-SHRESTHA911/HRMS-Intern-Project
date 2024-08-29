import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AttendanceRecord } from '../../model/attendance-details.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AttendanceDetailsService {
  private apiUrl = 'http://localhost:3000/AttandanceList';

  constructor(private http: HttpClient) {}

  getAttendanceRecords(): Observable<AttendanceRecord[]> {
    return this.http.get<AttendanceRecord[]>(this.apiUrl);
  }
}
