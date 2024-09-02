import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StaffList } from '../model/staff-list';
import { StaffDetails } from '../../add-staff/model/add-staff';
import { apiConstants } from '@shared/constants/api.constants';
import { baseUrl } from '@shared/constants/global.constants';
import { ResponseType } from '@shared/models/response.model';
@Injectable({
  providedIn: 'root',
})
export class StaffListService {
  private apiUrl = `${baseUrl}${apiConstants.getEmployeeList}`;
  constructor(private http: HttpClient) {}
  getStaffList(): Observable<ResponseType<StaffList[]>> {
    return this.http.get<ResponseType<StaffList[]>>(this.apiUrl);
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
