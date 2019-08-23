import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ServicesModule } from './services/services.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorRoutingModule } from './core/error/error-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { HomeModule } from './pages/home/home.module';
import { DeviceDetectorModule } from 'ngx-device-detector';
import {LogLevel} from 'msal';
import { MsalInterceptor, MsalModule } from '@azure/msal-angular';
import { OAuthSettings } from './services/micro-soft-graph.service';

export function loggerCallback(logLevel, message, piiEnabled) {
    console.log('client logging ----> ' + message);
}


export const protectedResourceMap: [string, string[]][] =


    [ ['https://buildtodoservice.azurewebsites.net/api/todolist',
        ['api://a88bb933-319c-41b5-9f04-eff36d985612/access_as_user']] ,
        ['https://graph.microsoft.com/v1.0/me', ['user.read']] ];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        MsalModule.forRoot({
                clientID: OAuthSettings.appId,
                // authority: 'https://login.microsoftonline.com/common/',
                // validateAuthority: true,
                redirectUri: 'http://localhost:4200/',
                cacheLocation : 'localStorage',
                postLogoutRedirectUri: 'http://localhost:4200/',
                navigateToLoginRequestUrl: true,
                popUp: false,
                // consentScopes: [ 'user.read'],
                // unprotectedResources: ['https://www.microsoft.com/en-us/'],
                // protectedResourceMap,
                logger: loggerCallback,
                correlationId: '1234',
                level: LogLevel.Verbose,
                piiLoggingEnabled: true
            }
        ),
        DeviceDetectorModule.forRoot(),
        HomeModule,
        CoreModule,
        BrowserModule,
        BrowserAnimationsModule,
        ServicesModule,
        AppRoutingModule,
        ErrorRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    ],
    providers: [
        // {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
        // {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
