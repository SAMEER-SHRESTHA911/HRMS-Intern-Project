import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadProfileDetailsAction,
  loadProfileDetailsActionFailure,
  loadProfileDetailsActionSuccess,
} from './profile-details.action';
import { ProfileDetiailsService } from '../services/profile.service';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ProfileDetailsEffect {
  loadProfileDetails$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadProfileDetailsAction),
      mergeMap(({ profileId }) =>
        this.profileDetailsService.getProfileDetails(profileId).pipe(
          map((profileDetails) =>
            loadProfileDetailsActionSuccess({ profileDetails })
          ),
          catchError((error) =>
            of(loadProfileDetailsActionFailure({ error: error.message }))
          )
        )
      )
    )
  );
  constructor(
    private action$: Actions,
    private profileDetailsService: ProfileDetiailsService
  ) {}
}
