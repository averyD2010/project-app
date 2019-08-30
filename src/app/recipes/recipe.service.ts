import { Recipe } from './recipe.module';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()

export class RecipeService{

    private recipes: Recipe[] = [
        new Recipe(
            'Pizza de Pepperoni', 
            'Con orilla de queso', 
            'http://atavolaconilconte.es/index/wp-content/uploads/2018/03/Pizza-pepperoni.jpg',
            [
                new Ingredient('Pepperoni', 2),
                new Ingredient('Queso', 10),
                new Ingredient('Harina', 15)
            ]),
        new Recipe(
            'Hamburguesa con queso', 
            'Lo mejor de lo mejor', 
            'https://cocina-casera.com/wp-content/uploads/2016/11/hamburguesa-queso-receta.jpg',
            [
                new Ingredient('Pan', 2),
                new Ingredient('Carne de Sirlone', 1),
                new Ingredient('Queso',2)
            ])
      ];
      
    constructor(private slService: ShoppingListService){

    }


    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(id: number){
        return this.recipes[id];
    }

    
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}