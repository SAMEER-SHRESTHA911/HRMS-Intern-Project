import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileDetails } from '../models/profile-details';
import { baseUrl } from '../../../../shared/constants/global.constants';
@Injectable({
  providedIn: 'root',
})
export class ProfileDetiailsService {
  constructor(private http: HttpClient) {}

  getProfileDetails(): Observable<ProfileDetails[]> {
    return this.http.get<ProfileDetails[]>(`${baseUrl}loggedInUser`);
  }

  updateProfile(data: ProfileDetails) {
    return this.http.patch<ProfileDetails[]>(
      `${baseUrl}users/${data.id}`,
      data
    );
  }
}
