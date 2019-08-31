import { Recipe } from './recipe.module';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';


@Injectable()

export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();

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
    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }
}