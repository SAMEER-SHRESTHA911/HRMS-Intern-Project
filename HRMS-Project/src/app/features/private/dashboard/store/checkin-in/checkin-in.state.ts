export interface CheckInState {
  checkInData: { result: number; message: string; data: string };
  loading: boolean;
  error: string | null;
}

export const initialState = {
  checkInData: {},
  loading: false,
  error: null,
};
