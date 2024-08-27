import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { submitLeaveForm } from './store/leave-apply-submit/leave.actions';
import { filter, Subject, takeUntil } from 'rxjs';
import { LeaveFormService } from './services/form/leave-form.service';
import { GET_EDIT_LEAVE_DATA } from './store/leave-apply-form/leave-edit.action';

@Component({
  selector: 'app-leave-apply',
  templateUrl: './leave-apply.component.html',
  styleUrl: './leave-apply.component.scss',
})
export class LeaveApplyComponent implements OnInit, OnDestroy {
  leaveApplyForm?: FormGroup;
  leaveId: string | number | null = null;

  minDate: Date = new Date();

  departments: string[] = ['Angular', '.NET'];
  leaveTypeArray: string[] = ['Sick', 'Annual', 'Other'];
  dayLeaveTypeArray: string[] = ['First Half', 'Second Half', 'Full Day'];

  #destroy$: Subject<void> = new Subject<void>();

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private leaveEditService: LeaveFormService,
    private leaveFormService: LeaveFormService
  ) {}

  ngOnInit(): void {
    this.#buildForm();
    console.log(this.isEditMode);
    this.loadEditData(this.editId);
  }

  ngOnDestroy(): void {
    this.#destroy$.next();
    this.#destroy$.complete();
    this.resetForm();
    this.leaveFormService.resetEditMode();
  }

  get editId(): string | undefined {
    return this.route.snapshot.params[' id'];
  }

  get isEditMode(): boolean {
    return this.leaveFormService.getEditMode();
  }

  onSubmit(): void {
    if (this.leaveApplyForm?.invalid) {
      return;
    }
    const formValue = this.leaveApplyForm?.value;

    if (this.isEditMode && this.leaveId !== null) {
      this.store.dispatch(GET_EDIT_LEAVE_DATA({ id: String(this.leaveId) }));
    } else {
      console.log(formValue);
      this.store.dispatch(submitLeaveForm({ leaveData: formValue }));
    }

    this.router.navigate(['/admin/dashboard']);
  }

  private loadEditData(leaveId?: string): void {
    console.log(leaveId)
    if (!leaveId) {
      return;
    }
    this.leaveEditService.fetchEditLeaveData(leaveId)
      .pipe(
         filter((data) => !!data),
        takeUntil(this.#destroy$),
      ).subscribe((data) => {
        if (this.leaveApplyForm) {
          this.leaveEditService.patchData(this.leaveApplyForm, data);
          console.log(data);
        }
      });
  }

  resetForm() {
    this.leaveApplyForm?.reset();
  }

  #buildForm(): void {
    this.leaveApplyForm = this.leaveEditService.buildForm();
  }
}
