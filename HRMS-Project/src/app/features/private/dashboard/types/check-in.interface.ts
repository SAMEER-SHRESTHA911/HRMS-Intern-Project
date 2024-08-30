export interface CheckInDetails {
  reason: string;
  workLocation: number;
}

export interface CheckInDetailsResponse {
  result: number;
  message: string;
  data: string;
}
