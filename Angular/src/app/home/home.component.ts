import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private oauthService: OAuthService) {
  }

  get identityClaims() {
    return this.oauthService.getIdentityClaims();
  }
}
