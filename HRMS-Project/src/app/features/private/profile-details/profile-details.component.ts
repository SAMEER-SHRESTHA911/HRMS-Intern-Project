import { Component, OnInit } from '@angular/core';
import { ProfileDetails } from './models/profile-details';
import { Observable, of } from 'rxjs';
import { ProfileDetailsState } from './store/profile-details.state';
import { Store } from '@ngrx/store';
import {
  selectProfileDetails,
  selectProfileDetailsDataError,
  selectProfileDetailsDataLoading,
} from './store/profile-details.selector';
import { ActivatedRoute, Router } from '@angular/router';
import { FETCH_PROFILE_DETAILS_ACTION } from './store/profile-details.action';
@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.scss',
})
export class ProfileDetailsComponent implements OnInit {
  paramProfileId: string | null = null;
  profileDetails$: Observable<ProfileDetails | null> = of(null);
  loading$: Observable<boolean> = of(false);
  error$: Observable<string | null> = of(null);
  constructor(
    private store: Store<ProfileDetailsState>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  selectorInitializer(): void {
    this.profileDetails$ = this.store.select(selectProfileDetails);

    this.loading$ = this.store.select(selectProfileDetailsDataLoading);

    this.error$ = this.store.select(selectProfileDetailsDataError);

    this.profileDetails$.subscribe((data) => console.log(data));
  }

  ngOnInit(): void {
    this.selectorInitializer();
    this.paramProfileId = this.route.snapshot.params['id'];
    console.log(this.paramProfileId);
    this.store.dispatch(
      FETCH_PROFILE_DETAILS_ACTION({ profileId: this.paramProfileId ?? '' })
    );
  }

  onEditProfileDetails(id: string | number): void {
    this.router.navigate(['/admin/profile-details/edit-profile', id]);
  }
}
