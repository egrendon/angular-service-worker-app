import { PwaService } from './pwa.service';
import { NgModule } from '@angular/core';
import { PlatformService } from './platform.service';
import { MicroSoftGraphService } from './micro-soft-graph.service';
import { MemoryStoreService } from './memory-store/memory-store.service';


@NgModule({
    imports: [],
    declarations: [],
    exports: [],
    providers: [
        PwaService,
        PlatformService,
        MicroSoftGraphService,
        MemoryStoreService,
    ],
})

export class ServicesModule {
}

