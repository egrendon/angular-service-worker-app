import { PwaService } from './pwa.service';
import { NgModule } from '@angular/core';
import { RecipeService } from './recipes.service';
import { RecipeImageService } from './recipeImage.service';

@NgModule({
    imports: [],
    declarations: [],
    exports: [],
    providers: [
        PwaService,
        // RecipeService,
        // RecipeImageService,
    ],
})

export class ServicesModule {
}

