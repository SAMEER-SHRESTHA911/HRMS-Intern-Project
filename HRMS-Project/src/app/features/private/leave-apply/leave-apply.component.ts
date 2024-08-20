import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave-apply',
  templateUrl: './leave-apply.component.html',
  styleUrl: './leave-apply.component.scss',
})
export class LeaveApplyComponent implements OnInit {
  
  leaveApplyForm!: FormGroup;
  
  departments: string[] = ['Angular', '.NET'];
  leaveTypeArray : string[] = ['Half', 'Full']

  constructor(private fb: FormBuilder, private router:Router) {}

  ngOnInit(): void {
    this.initApplyForm();
  }
  
  initApplyForm() {
    this.leaveApplyForm = this.fb.group({
      reason: ['', Validators.required],
      leaveType: ['', Validators.required ],
      leaveDateFrom: ['', Validators.required],
      leaveDateTo: ['', Validators.required],
      department: ['', Validators.required],
    });
  }
  onSubmit() {
    this.router.navigate(['/login'])
  }
}
