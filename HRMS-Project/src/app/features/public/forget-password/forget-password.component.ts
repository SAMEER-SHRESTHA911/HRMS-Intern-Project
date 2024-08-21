import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss',
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm!: FormGroup;

  constructor(private fb: FormBuilder, private authservice: AuthService) {}

  ngOnInit(): void {
    this.forgetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  onSubmit(): void {
    console.log('hi i am here');
    if (this.forgetPasswordForm.valid) {
      const email = this.forgetPasswordForm.get('email')?.value;
      // this.authservice.sendPasswordRestLink('email').subscribe(
      //   (response)=>{
      //    alert('Reset link sucessfuly sent to your email');
      //   },
      //   (error)=>{
      //     alert('Failed to send reset link. Please try again');
      //   }
      // );
    }
  }
}
