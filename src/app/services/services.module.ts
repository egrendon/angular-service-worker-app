import { PwaService } from './pwa.service';
import { NgModule } from '@angular/core';
import { PlatformService } from './platform.service';
import { MicroSoftGraphService } from './micro-soft-graph.service';


@NgModule({
    imports: [],
    declarations: [],
    exports: [],
    providers: [
        PwaService,
        PlatformService,
        MicroSoftGraphService,
    ],
})

export class ServicesModule {
}

