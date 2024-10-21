import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    // as we are using slice() to get a copy of ingredients so when 
    // we add a new ingredient through addIngredient(), changes will not reflect while we 
    // get the data through getIngredients() in any component, so to make sure changed data is available
    // we are using EventEmitter which would emit changed ingredients[] and its data 
    // will be subscribed and used whenever required
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        // ... spread operator crete a list of element and push every element in one go
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}