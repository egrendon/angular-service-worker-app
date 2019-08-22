import {ModelService} from '../app/core/services/model.service';
import {Recipe} from '../app/models/recipe.models';
import {AuthService} from '../app/core/services/auth.service';
import {RecipeSerializer} from '../app/app.serializers';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeService extends ModelService<Recipe> {

  constructor(authService: AuthService) {
    debugger;
    super(
      authService,
      Recipe,
      new RecipeSerializer()
    );
  }

}
