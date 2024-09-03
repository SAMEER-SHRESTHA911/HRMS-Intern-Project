import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileDetails } from '../models/profile-details';
import { baseUrl } from '@shared/constants/global.constants';
import { ResponseType } from '@shared/models/response.model';
import { apiConstants } from '@shared/constants/api.constants';
@Injectable({
  providedIn: 'root',
})
export class ProfileDetailsService {
  constructor(private http: HttpClient) {}

  getProfileDetailsById(
    profileId: string
  ): Observable<ResponseType<ProfileDetails>> {
    return this.http.get<ResponseType<ProfileDetails>>(
      `${baseUrl}${apiConstants.employeeDetails.getEmployeeDetailById}?id=${profileId}`
      // `http://0.0.0.0:14650/api/HttpUser/GetRegisterEmployeeDetailById?id=${profileId}`
    );
  }

  // updateProfile(data: ProfileDetails) {
  //   return this.http.patch<ProfileDetails[]>(
  //     `${baseUrl}users/${data.id}`,
  //     data
  //   );
  // }
}
