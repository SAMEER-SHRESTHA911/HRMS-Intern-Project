import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changePassword } from '../../change-password/store/change-password.action';
import { changePasswordState } from '../../change-password/store/change-password.reducer';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm!: FormGroup;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  confirmPasswordMismatch = false;
  oldPassword!: FormControl;
  newPassword!: FormControl;
  confirmPassword!: FormControl;

  constructor(private fb: FormBuilder, private store: Store<{ changePassword: changePasswordState }>) { }

  ngOnInit(): void {
    this.changePasswordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      conformPassword: ['', Validators.required]
    });


    this.loading$ = this.store.pipe(select(state => state.changePassword.loading));
    this.error$ = this.store.pipe(select(state => state.changePassword.error));

    this.changePasswordForm.valueChanges.subscribe(() => {
      this.confirmPasswordMismatch = this.changePasswordForm.get('newPassword')?.value !== this.changePasswordForm.get('conformPassword')?.value;
    });
  }

  onSubmit(): void {
    console.log('hi i am here');
    if (this.changePasswordForm.valid && !this.confirmPasswordMismatch) {
      const { currentPassword, newPassword } = this.changePasswordForm.value;
      this.store.dispatch(changePassword({ currentPassword, newPassword }));
    }
  }
}
