import { PwaService } from './pwa.service';
import { NgModule } from '@angular/core';
import { RecipeService } from './recipes.service';
import { RecipeImageService } from './recipeImage.service';
import { PlatformService } from './platform.service';

@NgModule({
    imports: [],
    declarations: [],
    exports: [],
    providers: [
        PwaService,
        PlatformService,
        // RecipeService,
        // RecipeImageService,
    ],
})

export class ServicesModule {
}

