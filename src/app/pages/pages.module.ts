
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    imports: [CommonModule],
    declarations: [HomeComponent, PageNotFoundComponent],
    exports: [],
    providers: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})

export class PagesModule {
}

