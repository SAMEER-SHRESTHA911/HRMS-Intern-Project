import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { getRole } from '@shared/constants/global.constants';
import { AuthService } from 'src/app/features/public/services/services/auth.service';

export const adminRoleGuard: CanActivateFn = (route, state) => {
  const role = getRole();
  const router = inject(Router);
  if (role === 'Admin') {
    return true;
  } else {
    router.navigate(['/not-found']);
    return false;
  }
};
