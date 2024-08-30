import { Injectable } from '@angular/core';
import { baseUrl } from '../../../constants/global.constants';
import { apiConstants } from '../../../constants/api.constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseType } from '../../../models/response.model';
import { CityData } from '../../../models/city.interface';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private apiUrl = `${baseUrl}${apiConstants.getCityList}`;
  constructor(private http: HttpClient) {}
  // getCityListBYCountryID(): Observable<ResponseType<CityData[]>> {
  //   return this.http.get<ResponseType<CityData[]>>(`${this.apiUrl}?countryId=${countryId}`);
  // }
}
