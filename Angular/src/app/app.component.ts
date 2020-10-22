import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { filter } from 'rxjs/operators';

import {authCodeFlowConfig} from './auth.config';
import {JwksValidationHandler} from 'angular-oauth2-oidc-jwks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private ouathService: OAuthService){
    this.ouathService.configure(authCodeFlowConfig);
    this.ouathService.tokenValidationHandler = new JwksValidationHandler();
    this.ouathService.loadDiscoveryDocumentAndTryLogin();

    this.ouathService.events
      .pipe(filter(e => e.type === 'token_received'))
      .subscribe(_ => this.ouathService.loadUserProfile().then(userinfo => console.log(userinfo)))
  }
}
