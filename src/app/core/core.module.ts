import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {SharedModule} from '../shared/shared.module';
import {ErrorModule} from './error/error.module';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {NavigationComponent} from './navigation/navigation.component';


@NgModule({
  declarations: [
    LoginComponent,
    NavigationComponent,
  ],
  imports: [
    SharedModule,
    ErrorModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
    NavigationComponent,
  ],
})
export class CoreModule {
}
