export interface CheckInState {
  checkInData: { result: number; message: string; data: string };
  loading: boolean;
  error: string;
}

export const initialState = {
  checkInData: {},
  loading: false,
  error: "",
};
