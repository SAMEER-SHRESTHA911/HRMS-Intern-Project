import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { submitLeaveForm } from './store/leave-apply-submit/leave.actions';
import { of, switchMap } from 'rxjs';
import { LeaveFormService } from './services/form/leave-form.service';
import { GET_EDIT_LEAVE_DATA } from './store/leave-apply-form/leave-edit.action';

@Component({
  selector: 'app-leave-apply',
  templateUrl: './leave-apply.component.html',
  styleUrl: './leave-apply.component.scss',
})
export class LeaveApplyComponent implements OnInit {
  leaveApplyForm!: FormGroup;
  isEditMode?: boolean;
  leaveId: string | number | null = null;

  minDate: Date = new Date();

  departments: string[] = ['Angular', '.NET'];
  leaveTypeArray: string[] = ['Sick', 'Annual', 'Other'];
  dayLeaveTypeArray: string[] = ['First Half', 'Second Half', 'Full Day'];

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private leaveEditService: LeaveFormService,
    private leaveFormService : LeaveFormService
  ) {}

  ngOnInit(): void {
    this.leaveApplyForm = this.leaveEditService.buildForm();
    this.initializeEditMode();
    this.isEditMode = this.leaveFormService.getEditMode()
    console.log(this.isEditMode)
  }

  onSubmit(): void {
    if (this.leaveApplyForm.valid) {
      const formValue = this.leaveApplyForm.value;

      if (this.isEditMode && this.leaveId !== null) {
        const updatedLeaveData = {
          ...formValue,
          leaveRequestStatus: 3,
        };
        this.store.dispatch(GET_EDIT_LEAVE_DATA({ id: String(this.leaveId) }));
      } 
      else {
        console.log(formValue)
        this.store.dispatch(submitLeaveForm({ leaveData: formValue }));
      }

      this.router.navigate(['/admin/dashboard']);
    }
  }

  private initializeEditMode(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const id = params.get('id');
          this.isEditMode = !!id;
          this.leaveId = id;

          if (this.isEditMode && this.leaveId !== null) {
            this.loadEditData(this.leaveId);
          }
          return of(null);
        })
      )
      .subscribe();
  }

  private loadEditData(leaveId: number | string): void {
    this.leaveEditService.fetchEditLeaveData(leaveId).subscribe((data) => {
      if (data) {
        this.leaveEditService.patchData(this.leaveApplyForm, data);
        console.log(data)
      }
    });
  }

  ngOnDestroy(): void {
    this.resetForm();
    this.leaveFormService.resetEditMode();
  }

  resetForm() {
    this.leaveApplyForm.reset();
  }
}
