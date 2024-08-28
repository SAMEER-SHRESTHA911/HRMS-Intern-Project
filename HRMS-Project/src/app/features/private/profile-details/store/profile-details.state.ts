import { ProfileDetails } from '../models/profile-details';

export interface ProfileDetailsState {
  profileDetails: ProfileDetails;
  loading: boolean;
  error: string | null;
}

export const initialState: ProfileDetailsState = {
  profileDetails: <ProfileDetails>{},
  loading: false,
  error: null,
};
