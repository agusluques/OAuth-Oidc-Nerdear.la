import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private oauthService: OAuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    var claims = this.oauthService.getIdentityClaims();
    
    if (this.oauthService.hasValidIdToken() && claims !== null && 
          typeof claims['roles'] !== 'undefined' && claims['roles'].includes("admin")) {
      return true;
    }

    this.router.navigate(['/home']);
    return false;
  }
}
