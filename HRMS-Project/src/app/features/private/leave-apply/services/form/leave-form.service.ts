import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LeaveApplyBody, LeaveApplyResponse } from '../../types/leave-apply';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class LeaveFormService {
  private  editLeaveApplyStatus = 'http://localhost:5262/apigateway/attendanceLeave/LeaveRequest/GetLeaveRequestDetailById?id=';
  constructor(private http: HttpClient, private fb: FormBuilder) {}

  isEditMode: boolean = false;

  buildForm(): FormGroup {
    return this.fb.group({    
      reasonForLeave: ['', [Validators.required, Validators.maxLength(50)]],
      leaveType: ['', Validators.required],
      leaveFrom: ['', Validators.required],
      leaveTo: ['', Validators.required],
      dayLeave: ['', Validators.required],
    });
  }

  changeEditMode():void{
    this.isEditMode = true;
  }
  getEditMode() : boolean{
    return this.isEditMode;
  }
  resetEditMode():void{
    this.isEditMode = false;
  }


  fetchEditLeaveData(id: string | number): Observable<LeaveApplyResponse> {
    return this.http.get<LeaveApplyResponse>(`${this.editLeaveApplyStatus}${id}`);
  }

  patchData(form: FormGroup, data: LeaveApplyBody): void {
    console.log(data)
    form.patchValue({
      reasonForLeave: data.reasonForLeave,
      leaveType: data.leaveType,
      leaveFrom: new Date(data.leaveFrom),
      leaveTo: new Date(data.leaveTo),
      dayLeave: data.dayLeave,
    });
  }
}
