import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  LeaveTableData,
  LeaveTableResponse,
} from '../../types/leave-table';
import { baseUrl } from '@shared/constants/global.constants';
import { apiConstants } from '@shared/constants/api.constants';

@Injectable({
  providedIn: 'root',
})
export class LeaveTableService {

  constructor(private http: HttpClient) {}

  getLeaveTableData(
    id: number
  ): Observable<{ leaveData: LeaveTableData[] }> {
    return this.http
      .get<LeaveTableResponse>(
        `${baseUrl}${apiConstants.leave.getLeaveRequestByEmpId}?id=${id}`
      )
      .pipe(
        map((response) => ({
          leaveData: response.data,
        }))
      );
  }
}
