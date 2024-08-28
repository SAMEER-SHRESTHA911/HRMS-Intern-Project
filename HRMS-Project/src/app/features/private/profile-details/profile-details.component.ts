import { Component, OnInit } from '@angular/core';
import { ProfileDetails } from './models/profile-details';
import { Observable, of } from 'rxjs';
import { ProfileDetailsState } from './store/profile-details.state';
import { Store } from '@ngrx/store';
import { selectProfileDetails } from './store/profile-details.selector';
import { loadProfileDetailsAction } from './store/profile-details.action';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.scss',
})
export class ProfileDetailsComponent implements OnInit {
  paramProfileId: string | null = null;
  profileDetails$: Observable<ProfileDetails> = of();
  loading$: Observable<boolean> = of(false);
  error$: Observable<string | null> = of(null);
  constructor(
    private store: Store<ProfileDetailsState>,
    private route: ActivatedRoute
  ) {}

  selectorInitializer(): void {
    this.profileDetails$ = this.store.select(selectProfileDetails);
    this.profileDetails$.subscribe((data) => console.log(data));
  }

  ngOnInit(): void {
    this.selectorInitializer();
    this.paramProfileId = this.route.snapshot.params['id'];
    console.log(this.paramProfileId);
    this.store.dispatch(
      loadProfileDetailsAction({ profileId: this.paramProfileId ?? '' })
    );
    console.log(this.paramProfileId);
  }
}
