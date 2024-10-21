import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

//to inject a service into a service we need @Injectable()
@Injectable()
export class RecipeService {
    public recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is simple test',
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=700,636',
            [
                new Ingredient('French Fries', 10),
                new Ingredient('onion', 2),
            ]
        ),
        new Recipe(
            'A Test Recipe 2',
            'This is simple test',
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=700,636',
            [
                new Ingredient('Chicken', 4),
                new Ingredient('Coriander', 1),
            ]
        ),
    ];

    constructor(private service:ShoppingListService){}

    getRecipes() {
        //in order to return a copy of recipes[] we used slice() to get a copy not exact array
        return this.recipes.slice();
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.service.addIngredients(ingredients);
    }
}