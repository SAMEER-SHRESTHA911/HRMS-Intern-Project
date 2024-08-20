import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.scss',
})
export class ProfileDetailsComponent {
  constructor(private matDialog: MatDialog) {}
  openDialog() {
    this.matDialog.open(ProfileEditComponent, {
      width: '500px',
      height: '600px',
    });
  }
}
