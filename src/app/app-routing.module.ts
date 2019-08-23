import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './core/logout/logout.component';
import { LoginComponent } from './core/login/login.component';


const routes: Routes = [
    // first landing page routes need to be defined here
    // and the rest will be loaded via dynamic router
    {path: '', redirectTo: 'recipe', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
