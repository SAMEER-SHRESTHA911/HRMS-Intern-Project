import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { LeaveApplyBody, LeaveApplyResponse } from '../../types/leave-apply';
import { baseUrl } from '@shared/constants/global.constants';
import { apiConstants } from '@shared/constants/api.constants';

@Injectable({
  providedIn: 'root',
})
export class LeaveFormService {
  // private editLeaveApplyStatus =
  //   'http://localhost:5262/apigateway/attendanceLeave/LeaveRequest/GetLeaveRequestDetailById?id=';

  isEditMode: boolean = false;

  #form!: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  get form(): FormGroup  {
    return this.#form;
  }

  set form(form: FormGroup ) {
    this.#form = form;
  }

  buildForm(): void {
    this.form = this.fb.group({
      reasonForLeave: ['', [Validators.required, Validators.maxLength(50)]],
      leaveType: ['', Validators.required],
      leaveFrom: ['', Validators.required],
      leaveTo: ['', Validators.required],
      dayLeave: ['', Validators.required],
    });
  }

  changeEditMode(): boolean {
    this.isEditMode = true;
    return this.isEditMode;
  }

  getEditMode(): boolean {
    return this.isEditMode;
  }

  resetEditMode(): boolean {
    this.isEditMode = false;
    return this.isEditMode;
  }

  fetchEditLeaveData(id: string | number): Observable<LeaveApplyResponse> {
    return this.http.get<LeaveApplyResponse>(
      `${baseUrl}${apiConstants.leave.getLeaveRequestDetailById}?id=${id}`
    );
  }

  // patchForm(data: LeaveApplyBody): void {
  //   this.form?.patchValue({
  //     reasonForLeave: data.reasonForLeave,
  //     leaveType: data.leaveType,
  //     leaveFrom: new Date(data.leaveFrom),
  //     leaveTo: new Date(data.leaveTo),
  //     dayLeave: data.dayLeave,
  //   });
  // }

  patchData(data: LeaveApplyBody): void {
    this.form?.patchValue({
      reasonForLeave: data.reasonForLeave,
      leaveType: data.leaveType,
      leaveFrom: new Date(data.leaveFrom),
      leaveTo: new Date(data.leaveTo),
      dayLeave: data.dayLeave,
    }); 
  }
}
