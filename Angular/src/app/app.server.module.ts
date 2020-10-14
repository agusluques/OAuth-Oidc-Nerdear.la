import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
    imports: [AppModule, ServerModule, ModuleMapLoaderModule, OAuthModule.forRoot()],
    bootstrap: [AppComponent]
})
export class AppServerModule { }
