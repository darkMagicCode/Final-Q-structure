import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgurdGuard implements CanActivate {
  constructor(private _AuthServiceService: AuthService, private _Router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    
    // <!-- // *********------------ check if user decoded data is there or not -----------******** -->

      if (this._AuthServiceService.userData.getValue() != null) {
        return true;
      }
      else {
        this._Router.navigate(['/login'])
        return false;   
      }  }
}
