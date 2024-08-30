import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StaffDetails } from '../../model/add-staff';
import { Observable } from 'rxjs';
import { StaffState } from '../../store/add-staff.state';
import { Store } from '@ngrx/store';
import { Route, Router } from '@angular/router';
import { ResponseType } from '../../../../../../shared/models/response.model';
import { apiConstants } from '../../../../../../shared/constants/api.constants';
import { baseUrl } from '../../../../../../shared/constants/global.constants';
@Injectable({
  providedIn: 'root',
})
export class AddStaffService {
  private apiUrl = `${baseUrl}${apiConstants.registerEmployee}`;
  constructor(
    private http: HttpClient,
    private store: Store<StaffState>,
    private route: Router
  ) {}
  postStaff(staff: StaffDetails): Observable<ResponseType<StaffDetails>> {
    this.route.navigate(['/admin/staff-registration/staff-list']);
    return this.http.post<ResponseType<StaffDetails>>(this.apiUrl, staff);
  }
}
