/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/services/auth.service'
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hide: boolean=true;


  constructor(private auth: AuthService, private router: Router, private fb: FormBuilder, private snackBar :MatSnackBar) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }


  onSubmit(): void {
    if (this.loginForm.valid && this.loginForm.valid) {
      this.auth.login(this.loginForm.value as {email:string,password:string}).subscribe(
        (result) =>
        {
          this.router.navigate(['admin/dashboard']);
          this.openSnackBar('LogIn Successfully')
        },
        (err) =>
        {
          this.openSnackBar('Failed to Login')
        }
      );
    }
  }
  togglePasswordVisibility():void{
    this.hide=!this.hide;
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
      panelClass: ['snack-bar']
    });

}
}

