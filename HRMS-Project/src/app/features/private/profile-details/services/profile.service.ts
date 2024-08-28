import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileDetails } from '../models/profile-details';
import {
  baseUrl,
  loggedInUser,
} from '../../../../shared/constants/global.constants';
@Injectable({
  providedIn: 'root',
})
export class ProfileDetiailsService {
  constructor(private http: HttpClient) {}
  loggedInUser = loggedInUser.id;

  getProfileDetails(profileId: string): Observable<ProfileDetails> {
    return this.http.get<ProfileDetails>(`${baseUrl}users/${profileId}`);
  }

  updateProfile(data: ProfileDetails) {
    return this.http.patch<ProfileDetails[]>(
      `${baseUrl}users/${data.id}`,
      data
    );
  }
}
