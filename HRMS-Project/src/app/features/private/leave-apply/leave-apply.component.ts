import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { submitLeaveForm } from './store/leave-apply-submit/leave.actions';
import { filter, Subject, takeUntil } from 'rxjs';
import { LeaveFormService } from './services/form/leave-form.service';
import { GET_EDIT_LEAVE_DATA } from './store/leave-apply-form/leave-edit.action';
import { DayLeaveDropdown } from '../../../shared/store/day-leave-dropdown/day-leave.state';
import { FETCH_DAY_LEAVE_DROPDOWN } from '../../../shared/store/day-leave-dropdown/day-leave.actions';
import {
  DayLeaveDropDownData,
  DayLeaveDropDownLoading,
} from '../../../shared/store/day-leave-dropdown/day-leave.selectors';
import { FETCH_LEAVE_TYPE_DROPDOWN } from '../../../shared/store/leave-type-dropdown/leave-type.action';
import {
  LeaveTypeDropDownData,
  leaveTypeDropDownLoading,
} from '../../../shared/store/leave-type-dropdown/leave-type.selector';
import { LeaveTypeDropdown } from '../../../shared/store/leave-type-dropdown/leave-type.state';
import { loggedInUser } from '../../../shared/constants/global.constants';
import { formatDate } from '../../../shared/utils/date-utils';

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
  leaveTypeArray: LeaveTypeDropdown[] = [];
  loadingLeaveType: boolean = false;
  dayLeaveTypeArray: DayLeaveDropdown[] = [];
  loadingDayLeave: boolean = false;

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
    this.loadEditData(this.editId);
    this.getDropDown();
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

  getDropDown() {
    this.store.dispatch(FETCH_DAY_LEAVE_DROPDOWN());

    this.store
      .select(DayLeaveDropDownData)
      .pipe(takeUntil(this.#destroy$))
      .subscribe((dayLeaveDropDown) => {
        this.dayLeaveTypeArray = dayLeaveDropDown;
      });

    this.store
      .select(DayLeaveDropDownLoading)
      .pipe(takeUntil(this.#destroy$))
      .subscribe((loading) => {
        this.loadingDayLeave = loading;
      });

    this.store.dispatch(FETCH_LEAVE_TYPE_DROPDOWN());

    this.store
      .select(LeaveTypeDropDownData)
      .pipe(takeUntil(this.#destroy$))
      .subscribe((leaveTypeDropDown) => {
        this.leaveTypeArray = leaveTypeDropDown;
      });

    this.store
      .select(leaveTypeDropDownLoading)
      .pipe(takeUntil(this.#destroy$))
      .subscribe((loading) => {
        this.loadingLeaveType = loading;
      });
  }

  onSubmit(): void {
    if (this.leaveApplyForm?.invalid) {
      return;
    }
    const formValue = this.leaveApplyForm?.value;

    const selectedDayLeave = this.dayLeaveTypeArray.find(item => item.value === formValue.dayLeave.value)?.key;
    const selectedLeaveType = this.leaveTypeArray.find(item => item.value === formValue.leaveType.value)?.key;
    const formattedLeaveFrom = formatDate(formValue.leaveFrom);
    const formattedLeaveTo = formatDate(formValue.leaveTo);

    const formValueSubmit = {
      employeeId: Number(loggedInUser.id),
      leaveFrom: formattedLeaveFrom,
      leaveTo: formattedLeaveTo,
      leaveType: selectedLeaveType??0,
      dayLeave: selectedDayLeave??0,
      reasonForLeave: formValue.reasonForLeave,
      leaveRequestStatus : 3
    };


    if (this.isEditMode && this.leaveId !== null) {
      this.store.dispatch(GET_EDIT_LEAVE_DATA({ id: String(this.leaveId) }));
    } else {
      this.store.dispatch(submitLeaveForm({ leaveData: formValueSubmit }));
    }

    this.router.navigate(['/admin/leave-management']);
  }

  private loadEditData(leaveId?: string): void {
    console.log(leaveId);
    if (!leaveId) {
      return;
    }
    this.leaveEditService
      .fetchEditLeaveData(leaveId)
      .pipe(
        filter((data) => !!data),
        takeUntil(this.#destroy$)
      )
      .subscribe((data) => {
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
