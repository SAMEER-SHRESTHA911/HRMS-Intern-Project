import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StaffDetails } from '../../model/add-staff';
import { Observable } from 'rxjs';
import { StaffState } from '../../store/add-staff.state';
import { Store } from '@ngrx/store';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AddStaffService {
  private apiUrl = 'http://localhost:3000/users';
  constructor(
    private http: HttpClient,
    private store: Store<StaffState>,
    private route: Router
  ) {}
  postStaff(staff: StaffDetails): Observable<StaffDetails> {
    this.route.navigate(['/admin/staff-registration/staff-list']);
    return this.http.post<StaffDetails>(this.apiUrl, staff);
  }
}
