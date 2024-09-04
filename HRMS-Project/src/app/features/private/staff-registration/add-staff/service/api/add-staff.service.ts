import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiConstants } from '../../../../../../shared/constants/api.constants';
import { baseUrl } from '../../../../../../shared/constants/global.constants';
import { ResponseType } from '../../../../../../shared/models/response.model';
import { GetEmployeeDetails, RegisterStaffPayload } from '../../model/add-staff';


import { StaffState } from '../../store/add-staff.state';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { ResponseType } from '@shared/models/response.model';
import { apiConstants } from '@shared/constants/api.constants';
import { baseUrl } from '@shared/constants/global.constants';
@Injectable({
  providedIn: 'root',
})
export class AddStaffService {
  private apiUrl = `${baseUrl}${apiConstants.registerEmployee}`;
  private getEmployeeByIdUrl = `${baseUrl}${apiConstants.getEmployeeById}`
  constructor(
    private http: HttpClient,
  ) { }

  postStaff(staff: RegisterStaffPayload): Observable<ResponseType<boolean>> {
    return this.http.post<ResponseType<boolean>>(this.apiUrl, staff);
  }
  getEmployeeData(employeeId: number): Observable<ResponseType<GetEmployeeDetails>> {
    return this.http.get<ResponseType<GetEmployeeDetails>>(`${this.getEmployeeByIdUrl}?id=${employeeId}`);
  }

}