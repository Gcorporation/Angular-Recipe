import { Action } from "@ngrx/store";
import { Ingredient } from "src/app/shared/ingredient.model";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';

export class ADDIngredient implements Action {
    
    readonly type = ADD_INGREDIENT;

    constructor(public payload: Ingredient) {}
}

export class ADDIngredients implements Action {
    
    readonly type = ADD_INGREDIENTS;

    constructor(public payload: Ingredient[]) {}
}

export type ShoppingListActions  = ADDIngredient | ADDIngredients;