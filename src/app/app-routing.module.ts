import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [  { path: 'home', component: HomeComponent },
    // first landing page routes need to be defined here and the rest will be loaded via dynamic router
    // { path: 'about', component: AboutComponent },
    // { path: 'privacy', component: PrivacyComponent },
    // { path: 'terms', component: TermsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
