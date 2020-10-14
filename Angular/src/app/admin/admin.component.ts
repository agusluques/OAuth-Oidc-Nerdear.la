import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-admin-component',
  templateUrl: './admin.component.html'
})
export class AdminComponent {
  constructor(private oauthService: OAuthService) {
  }
}

