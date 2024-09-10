import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as OtpActions from './Store/OTP.actions';
import { selectOtpVerified, selectAuthError } from './Store/OTP.selector';
import { AppState } from './Store/OTP.sate';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OTPComponent implements OnInit {
  otpForm!: FormGroup;
  otpVerified$!: Observable<boolean>;
  authError$!: Observable<string | null>;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit(): void {

    this.otpForm = this.fb.group({
      otp: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
    });


    this.otpVerified$ = this.store.select(selectOtpVerified);
    this.authError$ = this.store.select(selectAuthError);
  }

  onSubmit() {
    if (this.otpForm.valid) {
      const otp = this.otpForm.get('otp')?.value;
      this.store.dispatch(OtpActions.verifyOtp({ otp }));
    }
  }

  validateInput(event: KeyboardEvent) {
    const pattern = /^[0-9]$/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
