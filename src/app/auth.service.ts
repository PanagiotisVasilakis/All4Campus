import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export class Authservice {

    // private _loginurl = "./"
    loggedIn() {
        return !!localStorage.getItem('token');
      }
}