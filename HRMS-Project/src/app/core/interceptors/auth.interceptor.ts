import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../features/public/services/services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  
  if (authService.isLoggedIn()) {
    const token = authService.getToken();
    console.log(token)
    const newReq = req.clone({
      headers: req.headers.set(
        'Authorization',
        `Bearer ${authService.getToken()}`
      ),
    });

    return next(newReq);
  }

  return next(req);
};
