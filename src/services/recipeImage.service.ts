import {ModelService} from '../app/core/services/model.service';
import {RecipeImage} from '../app/models/recipe.models';
import {AuthService} from '../app/core/services/auth.service';
import {RecipeImageSerializer} from '../app/app.serializers';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeImageService extends ModelService<RecipeImage> {

  constructor(authService: AuthService) {
    super(
      authService,
      RecipeImage,
      new RecipeImageSerializer()
    );
  }
}
