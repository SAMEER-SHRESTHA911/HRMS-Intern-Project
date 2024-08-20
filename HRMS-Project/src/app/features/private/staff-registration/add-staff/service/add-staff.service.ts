import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StaffDetails } from '../model/add-staff';
import { Observable } from 'rxjs';
import { StaffState } from '../store/add-staff.state';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class AddStaffService {
  private apiUrl = 'http://localhost:3000/Users';
  constructor(private http: HttpClient, private store: Store<StaffState>) {}
  postStaff(staff: StaffDetails): Observable<StaffDetails> {
    return this.http.post<StaffDetails>(this.apiUrl, staff);
  }
}
