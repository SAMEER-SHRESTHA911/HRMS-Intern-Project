import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DayLeaveState } from '../../store/day-leave-dropdown/day-leave.state';

@Injectable({
  providedIn: 'root'
})
export class DayLeaveDropdownService {

  private apiUrl = ``;
  constructor(private http: HttpClient) { }

  getDayLeaveDropdown(): Observable<DayLeaveState>{
    return this.http.get<DayLeaveState>(this.apiUrl)
  }
}
