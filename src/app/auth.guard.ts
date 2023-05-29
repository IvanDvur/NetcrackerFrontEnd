import {
  ActivatedRouteSnapshot,
  CanActivate, CanActivateChild,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "./services/auth/auth.service";
import {TokenStorageService} from "./services/auth/token-storage.service";

// старый способ
@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate,CanActivateChild{
  constructor(private tokenStorageService:TokenStorageService,private router:Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean > | Promise<boolean> | boolean | UrlTree {
    return this.tokenStorageService.isAuthenticated().then((isAuth):any=>{
      if(isAuth){
        return true
      }
      else {
        this.router.navigate(['/login'])
      }
    })
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   return  this.canActivate(childRoute,state);
  }

}
