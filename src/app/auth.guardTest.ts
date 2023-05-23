import {ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import {inject} from "@angular/core";
import {TokenStorageService} from "./services/auth/token-storage.service";


// новый способ
export const canActivate: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(TokenStorageService);
  const router = inject(Router);
  return authService.isAuthenticated().then((isAuth):any=>{
    if(isAuth){
      return true
    }
    else {
      router.navigate(['/login'])
    }
  })

};

export const canActivateChild: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => canActivate(route, state);
