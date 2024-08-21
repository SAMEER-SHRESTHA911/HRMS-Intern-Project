import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

 loginForm!: FormGroup;

 constructor(private auth: AuthService, private router:Router, private fb:FormBuilder) {}

 ngOnInit(): void {
  this.loginForm = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.minLength(6)]]
  })
 }

 onSubmit() : void {
  //  if(this.loginForm.valid){
  // console.log(this.loginForm.value);
  //  }else{
  //   //...
  //  }
    if(this.loginForm.valid){
    this.auth.login(this.loginForm.value).subscribe(
      (result)=>{
        this.router.navigate(['admin/dashboard']);
      },
      (err:Error)=>{
        alert(err.message);
      }
    );
  }
 }
}

