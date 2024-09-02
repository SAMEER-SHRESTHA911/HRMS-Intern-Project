import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CheckingInService } from '../../services/checking-in/checking-in.service';
import { FormGroup } from '@angular/forms';
import { CheckInDetails } from '../../types/check-in.interface';
import { postCheckInAction } from '../../store/checkin-in/checkin-in.actions';
import { Store } from '@ngrx/store';
import { CheckInState } from '../../store/checkin-in/checkin-in.state';
@Component({
  selector: 'app-checking-in-dialog',
  templateUrl: './checking-in-dialog.component.html',
  styleUrl: './checking-in-dialog.component.scss',
})
export class CheckingInDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CheckingInDialogComponent>,
    private checkInService: CheckingInService,
    private store: Store<CheckInState>
  ) {}

  get checkInForm(): FormGroup {
    return this.checkInService.checkInForm;
  }

  ngOnInit(): void {
    // this.checkInService.checkInForm;
  }

  onConfirm(): void {
    this.dialogRef.close(true);
    this.checkInForm.reset();
  }

  onCancel(): void {
    this.dialogRef.close(false);
    this.checkInForm.reset();
  }
  onSubmit() {
    if (this.checkInForm.valid) {
      const checkInFormRemarks: CheckInDetails = {
        ...this.checkInForm.value,
      };
      console.log(checkInFormRemarks);
      this.dialogRef.close(true);
      this.store.dispatch(
        postCheckInAction({ checkInDetails: checkInFormRemarks })
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
