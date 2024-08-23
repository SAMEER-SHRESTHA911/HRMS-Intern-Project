import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LeaveApplyBody } from './types/leave-apply';
import { Store } from '@ngrx/store';
import { submitLeaveForm } from './store/leave.actions';

@Component({
  selector: 'app-leave-apply',
  templateUrl: './leave-apply.component.html',
  styleUrl: './leave-apply.component.scss',
})
export class LeaveApplyComponent implements OnInit {
  
  leaveApplyForm!: FormGroup;

  minDate : Date = new Date();

  departments: string[] = ['Angular', '.NET'];
  leaveTypeArray: string[] = ['Sick', 'Annual', 'Other'];
  dayLeaveTypeArray : string[] = ['First Half', 'Second Half', 'Full Day'];

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initApplyForm();
  }

  initApplyForm() {
    this.leaveApplyForm = this.fb.group({
      reasonForLeave: ['', Validators.required],
      leaveType: ['', Validators.required],
      leaveFrom: ['', Validators.required],
      leaveTo: ['', Validators.required],
      department: ['', Validators.required],
      dayLeave: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.leaveApplyForm.valid) {
      console.log(this.leaveApplyForm.value)
      const formValue = this.leaveApplyForm.value;
      this.store.dispatch(submitLeaveForm({ leaveData : formValue}))
      this.router.navigate(['/admin/dashboard']);
    }
  }
  ngOnDestroy(): void {
    this.resetForm();  
  }

  resetForm(){
    this.leaveApplyForm.reset()
  }
}
