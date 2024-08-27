import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LeaveApplyBody } from '../../types/leave-apply';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class LeaveFormService {
  private  editLeaveApplyStatus = 'http://localhost:3000/leaveTable';
  constructor(private http: HttpClient, private fb: FormBuilder) {}

  isEditMode: boolean = false;

  buildForm(): FormGroup {
    return this.fb.group({
      reasonForLeave: ['', Validators.required],
      leaveType: ['', Validators.required],
      leaveFrom: ['', Validators.required],
      leaveTo: ['', Validators.required],
      // department: ['', Validators.required],
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


  fetchEditLeaveData(id: string | number): Observable<LeaveApplyBody> {
    return this.http.get<LeaveApplyBody>(`${this.editLeaveApplyStatus}/${id}`);
  }

  patchData(form: FormGroup, data: LeaveApplyBody): void {
    form.patchValue({
      reasonForLeave: data.reasonForLeave,
      leaveType: data.leaveType,
      leaveFrom: new Date(data.leaveFrom),
      leaveTo: new Date(data.leaveTo),
      // department: 'Angular', // Adjust this as per actual data
      dayLeave: data.dayLeave,
    });
  }
}
