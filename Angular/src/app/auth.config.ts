import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
    issuer: 'http://localhost:8080/auth/realms/Nerdearla',
    redirectUri: window.location.origin,
    clientId: 'angular-demo-app',
    responseType: 'code',
    scope: 'openid',
    showDebugInformation: true
};
