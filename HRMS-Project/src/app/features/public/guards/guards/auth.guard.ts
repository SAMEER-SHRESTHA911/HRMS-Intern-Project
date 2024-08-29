import { ActivatedRouteSnapshot, CanActivate, Router,  RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../services/services/auth.service';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthGuard implements CanActivate{
constructor(private auth :AuthService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
   )
  :boolean
  {
    if(!this.auth.isLoggedIn()){
      this.router.navigate(['admin/dashboard']);
      return true;
    }
    return false;
  }
}


