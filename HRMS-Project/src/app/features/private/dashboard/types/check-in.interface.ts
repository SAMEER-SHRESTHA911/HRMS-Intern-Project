export interface CheckInDetails {
  reason: string;
  workLocation: number;
}

export interface CheckOutDetails {
  checkOutReason: string;
}

export interface CheckInDetailsResponse {
  result: number;
  message: string;
  data: string;
}
