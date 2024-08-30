import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { type ResponseType } from '../../../../../shared/models/response.model';
import { type TodayAttendanceSummary } from '../../types/todays-attendance.interface';

@Injectable({
  providedIn: 'root',
})
export class TodaysAttendanceService {
  constructor(private http: HttpClient) {}

  // getTodaysAttendanceSummary(): Observable<
  //   ResponseType<TodayAttendanceSummary>
  // > {}
}
