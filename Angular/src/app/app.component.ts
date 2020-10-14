import { OAuthService } from 'angular-oauth2-oidc';
import { filter } from 'rxjs/operators';
import { authCodeFlowConfig } from './auth.config';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
    constructor(private oauthService: OAuthService) {
        this.oauthService.configure(authCodeFlowConfig);
        this.oauthService.loadDiscoveryDocumentAndTryLogin();

        this.oauthService.events
            .pipe(filter(e => e.type === 'token_received'))
            .subscribe(_ => this.oauthService.loadUserProfile());
  }
}
