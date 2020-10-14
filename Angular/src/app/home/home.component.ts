import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private oauthService: OAuthService) {
  }

  login() {
    //this.oauthService.initCodeFlow();   -> específico para Code flow
    this.oauthService.initLoginFlow(); // -> funciona tanto con Code Flow como con Implicit
  }

  logout() {
    this.oauthService.logOut();
  }

  get identityClaims() {
    return this.oauthService.getIdentityClaims();
  }
}
