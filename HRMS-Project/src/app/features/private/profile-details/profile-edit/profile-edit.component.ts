import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.scss',
})
export class ProfileEditComponent {
  constructor(private fb: FormBuilder) {}

  editProfileForm = this.fb.group({
    firstName: '',
    midName: '',
    lastName: '',
    gender: '',
    dob: '',
    address: '',
    nationality: '',
    citizenshipNumber: '',
    department: '',
    role: '',
    email: '',
  });

  onSubmit():void{
    console.log("submitted form", this.editProfileForm.value);
    
  }
}
