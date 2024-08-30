import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  sendPasswordResetLink(email: any) :Observable<any>{
    return this.http.get<any>('apiUrl');
  }
  private apiUrl = 'https://zg0qm2qz-1595.inc1.devtunnels.ms/apigateway/user/Login/Login';

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

    return this.http.post(this.apiUrl, credentials, { headers }).pipe(
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
}

