import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Teste Recipe', 'This is simply a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272'),
    new Recipe('Another Teste Recipe', 'This is simply a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272')
  ];

  getRecipes(){
    return this.recipes.slice();
  }
}
