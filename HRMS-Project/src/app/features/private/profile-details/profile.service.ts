import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileDetails } from './models/profile-details';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private baseUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  getProfileDetails(): Observable<ProfileDetails[]> {
    return this.http.get<ProfileDetails[]>(this.baseUrl);
  }
}
