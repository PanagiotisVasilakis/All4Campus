import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Authservice } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: Authservice,
              private _router: Router) {}

              
  canActivate(): boolean {
    if(this._authService.loggedIn()){
      return true
    }
    else{
      this._router.navigate(['/login'])
      return false
    }
  }

}
