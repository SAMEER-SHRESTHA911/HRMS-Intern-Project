import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileService } from './profile.service';
import { ProfileDetails } from './models/profile-details';
@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.scss',
})
export class ProfileDetailsComponent implements OnInit {
  profileDetails: ProfileDetails[] = [];
  constructor(
    private matDialog: MatDialog,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.profileService.getProfileDetails().subscribe({
      next: (data: ProfileDetails[]) => {
        this.profileDetails = data;
      },
    });
  }
  get fullName() {
    return `${this.profileDetails[0].firstName} ${this.profileDetails[0].midName} ${this.profileDetails[0].lastName}`;
  }
  openDialog() {
    this.matDialog.open(ProfileEditComponent, {
      width: '500px',
      // height: '700px',
    });
  }
}
