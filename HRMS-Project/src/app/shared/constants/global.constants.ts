// export const baseUrl = 'http://localhost:3000';
export const baseUrl = 'https://zg0qm2qz-1595.inc1.devtunnels.ms/apigateway';
// export const baseUrl = 'http://192.168.1.21:5000/apigateway';
// export const baseUrl = 'https://szln22kl-1595.inc1.devtunnels.ms/apigateway';

// export const baseUrl = `http://localhost:5262/apigateway`;
// Samir's portal

// export const baseUrl = `http://localhost:1595/apigateway`;

interface ILoggedInUser {
  id: string | null;
  isCheckedIn: boolean;
}

export const loggedInUser: ILoggedInUser = {
  id: localStorage.getItem('employeeId'),
  isCheckedIn: false,
};

export function getRole(): string | null {
  return localStorage.getItem('role');
}
