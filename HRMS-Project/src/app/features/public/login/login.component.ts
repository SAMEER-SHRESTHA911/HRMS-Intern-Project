import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OnIdentifyEffects } from '@ngrx/effects';
import { AuthService } from '../services/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

 logiinForm = new FormGroup({
  email : new FormControl(''),
  password : new FormControl(''),
 });

 constructor(private auth: AuthService, private router:Router) {}

 ngOnInit(): void {}

 onSubmit() : void {
  if(this.logiinForm.valid){
    this.auth.login(this.logiinForm.value).subscribe(
      (result)=>{
        this.router.navigate(['admin']);
      },
      (err:Error)=>{
        alert(err.message);
      }
    );
  }
 }
}
