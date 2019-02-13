import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  AuthModule,
  OidcSecurityService,
  OpenIDImplicitFlowConfiguration,
  OidcConfigService,
  AuthWellKnownEndpoints
} from 'angular-auth-oidc-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContractsModule } from './contracts/contracts.module';
import { LoginComponent } from './login/login.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';

export function loadConfig(oidcConfigService: OidcConfigService) {
  console.log('APP_INITIALIZER STARTING');
  return () =>
    // tslint:disable-next-line:max-line-length
    oidcConfigService.load_using_custom_stsServer('https://login.microsoftonline.com/VaskoTestActiveDir.onmicrosoft.com/v2.0/.well-known/openid-configuration');
}

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    CoreModule,
    ContractsModule,
    HttpClientModule,
    AuthModule.forRoot()],
  providers: [
    OidcConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfig,
      deps: [OidcConfigService],
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    private oidcSecurityService: OidcSecurityService,
    private oidcConfigService: OidcConfigService
  ) {
    this.oidcConfigService.onConfigurationLoaded.subscribe(() => {

      const openIDImplicitFlowConfiguration = new OpenIDImplicitFlowConfiguration();
      // tslint:disable-next-line:max-line-length
      openIDImplicitFlowConfiguration.stsServer = 'https://login.microsoftonline.com/VaskoTestActiveDir.onmicrosoft.com/.well-known/openid-configuration';
      openIDImplicitFlowConfiguration.redirect_url = 'http://localhost:4200/';
      openIDImplicitFlowConfiguration.client_id = 'd35c8bf9-ef9b-48b1-b6b4-c6b40f0a5c25';
      openIDImplicitFlowConfiguration.response_type = 'id_token token';
      openIDImplicitFlowConfiguration.scope = 'openid profile';
      openIDImplicitFlowConfiguration.post_logout_redirect_uri = 'http://localhost:4200/';
      // openIDImplicitFlowConfiguration.post_login_route = '/';
      // openIDImplicitFlowConfiguration.forbidden_route = '/';
      // openIDImplicitFlowConfiguration.unauthorized_route = '/';
      openIDImplicitFlowConfiguration.auto_userinfo = true;
      openIDImplicitFlowConfiguration.log_console_warning_active = true;
      openIDImplicitFlowConfiguration.log_console_debug_active = true;
      openIDImplicitFlowConfiguration.max_id_token_iat_offset_allowed_in_seconds = 30;

      const authWellKnownEndpoints = new AuthWellKnownEndpoints();
      authWellKnownEndpoints.setWellKnownEndpoints(this.oidcConfigService.wellKnownEndpoints);

      this.oidcSecurityService.setupModule(openIDImplicitFlowConfiguration, authWellKnownEndpoints);
});

    console.log('APP STARTING');
  }
}
