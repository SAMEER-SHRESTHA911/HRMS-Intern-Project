// export const baseUrl = 'http://localhost:3000';
export const baseUrl = 'https://zg0qm2qz-1595.inc1.devtunnels.ms/apigateway';
// export const baseUrl = 'http://192.168.1.30:2209';

interface ILoggedInUser {
  id: string | null;
  isCheckedIn: boolean;
}

export const loggedInUser: ILoggedInUser = {
  id: localStorage.getItem('employeeId'),
  isCheckedIn: false,
};
