import { BaseModel, Model } from './app.models';

export class Recipe extends BaseModel implements Model {
    static modelName = 'recipes';
    static modelPlural = 'recipes';

    static lookupField = 'slug';
    id: number;
    title: string;
    slug: string;
    instructions: string;
    author: string;
    creationDate: Date;
    updateDate: Date;
}

export class RecipeImage extends BaseModel implements Model {
    static modelName = 'recipe-images';
    static modelPlural = 'recipe-images';

    id: number;
    recipe: number;
    image: any;
    creationDate: Date;
}