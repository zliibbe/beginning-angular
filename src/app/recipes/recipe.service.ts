import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'this is a recipe description', 'https://www.cookipedia.co.uk/wiki/images/e/ea/Gazpacho_ligero_con_mostaza_recipe.jpg'),
    new Recipe('Another Test Recipe', 'Wow! this is also a recipe description', 'https://www.cookipedia.co.uk/wiki/images/e/ea/Gazpacho_ligero_con_mostaza_recipe.jpg')
  ];

  getRecipes() {
    return this.recipes.slice() //.slice gives us a copy of the array
  }
}
