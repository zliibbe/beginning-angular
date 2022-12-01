import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schitzel',
      'A super-tasty Schnitzel - Yum! Yum!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 33)

      ]),
    new Recipe(
      'Big Fat Burger',
      'Damn! Look at that tasty burger!',
      'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg',
      [
        new Ingredient('Beef Patty', 1),
        new Ingredient('Buns', 2),
        new Ingredient('Tomato', 2),
        new Ingredient('Cheese', 1),
        new Ingredient('Pickles', 4)
      ])
  ];

  getRecipes() {
    return this.recipes.slice() //.slice gives us a copy of the array
  }
}
