import { ActivatedRouteSnapshot, CanActivate,  GuardResult,  MaybeAsync,  Router,  RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../services/services/auth.service';

export class authGuard implements CanActivate{
constructor(private auth :AuthService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
   ):boolean {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['login']);
      return false;
    }
    return this.auth.isLoggedIn();
  }
}


