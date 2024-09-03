import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CheckingInService } from '../../services/checking-in/checking-in.service';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-checking-in-dialog',
  templateUrl: './checking-in-dialog.component.html',
  styleUrl: './checking-in-dialog.component.scss',
})
export class CheckingInDialogComponent {
  isCheckedIn: boolean;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { isCheckedIn: boolean },
    public dialogRef: MatDialogRef<CheckingInDialogComponent>,
    private checkInService: CheckingInService
  ) {
    this.isCheckedIn = data.isCheckedIn;
  }

  get checkInForm(): FormGroup {
    return this.checkInService.checkInForm;
  }

  ngOnInit(): void {
    // this.checkInService.checkInForm()
    this.checkInForm.reset();
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
    if (this.checkInForm.invalid) {
      this.checkInForm.markAllAsTouched();
      return;
    }
  }
}
