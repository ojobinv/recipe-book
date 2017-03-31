import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
 recipeSelected = new EventEmitter<Recipe>();

 recipes: Recipe[] = [
    new Recipe('French Fries',
    'Test description of test recipe',
    'http://images.media-allrecipes.com/userphotos/250x250/00/68/79/687910.jpg',
    [
        new Ingredient('meat', 1),
        new Ingredient('french fries', 20)
    ])
  ];

 constructor(private shoppingListService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.shoppingListService.addIngredients(ingredients);
  }

}