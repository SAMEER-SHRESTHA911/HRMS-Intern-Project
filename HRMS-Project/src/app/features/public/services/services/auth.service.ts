import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://zg0qm2qz-1595.inc1.devtunnels.ms/apigateway/user/';

  constructor(private http: HttpClient, private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(`${this.apiUrl}Login/Login`, credentials, { headers }).pipe(
      map((response: any) => {
        const token = response.token;
        this.setToken(token);
        return response;
      }),
      catchError(error => {
        return throwError(() => new Error('Failed to login'));
      })
    );
  }

  requestOTP(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}requestOTP`, { email }).pipe(
      catchError(error => {
        return throwError(() => new Error('Failed to request OTP'));
      })
    );
  }

  resetPassword(token: string, newPassword: string): Observable<any> {
    return this.http.post(`${this.apiUrl}resetPassword`, { token, newPassword }).pipe(
      catchError(error => {
        return throwError(() => new Error('Failed to reset password'));
      })
    );
  }

  changePassword(currentPassword: string, newPassword: string): Observable<any> {
    return this.http.post(`${this.apiUrl}changePassword`, { currentPassword, newPassword }).pipe(
      catchError(error => {
        return throwError(() => new Error('Failed to change password'));
      })
    );
  }

  getUserDetailsFromToken(): Observable<any> {
    return this.http.get(`${this.apiUrl}getUserDetails`).pipe(
      catchError(error => {
        return throwError(() => new Error('Failed to get user details'));
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
