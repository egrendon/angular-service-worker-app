import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ServicesModule } from '../services/services.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorRoutingModule } from './core/error/error-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './core/interceptor/error.interceptor';
import { AuthInterceptor } from './core/interceptor/auth.interceptor';
import { CoreModule } from './core/core.module';
import { RecipeModule } from './recipe/recipe.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        RecipeModule,
        CoreModule,
        BrowserModule,
        BrowserAnimationsModule,
        ServicesModule,
        AppRoutingModule,
        ErrorRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
