// forget-password.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ForgetPasswordActions from './store/forget-password.action';
import { selectLoading, selectSuccess, selectError } from './store/forget-password.selector';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm!: FormGroup;
  loading$!: Observable<boolean>;
  success$!: Observable<boolean>;
  error$!: Observable<any>;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.forgetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });

  
    this.loading$ = this.store.pipe(select(selectLoading));
    this.success$ = this.store.pipe(select(selectSuccess));
    this.error$ = this.store.pipe(select(selectError));
  }

  onSubmit() {
    if (this.forgetPasswordForm.valid) {
      const email = this.forgetPasswordForm.get('email')?.value;
      this.store.dispatch(ForgetPasswordActions.sendPasswordResetLink({ email }));
    }
  }
}
