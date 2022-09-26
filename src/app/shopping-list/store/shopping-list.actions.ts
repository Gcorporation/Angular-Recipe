import { Action } from "@ngrx/store";
import { Ingredient } from "src/app/shared/ingredient.model";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const UPDATE_INGREDIENT = 'ADD_INGREDIENTS';
export const DELETE_INGREDIENT = 'ADD_INGREDIENTS';

export class ADDIngredient implements Action {
    
    readonly type = ADD_INGREDIENT;

    constructor(public payload: Ingredient) {}
}

export class ADDIngredients implements Action {
    
    readonly type = ADD_INGREDIENTS;

    constructor(public payload: Ingredient[]) {}
}

export class UpdateIngredient implements Action {
    
    readonly type = UPDATE_INGREDIENT;

    constructor(public payload: { index: number, ingredient: Ingredient } ) {}
}

export class DeleteIngredient implements Action {
    
    readonly type = DELETE_INGREDIENT;

    constructor(public payload: number ) {}
}

export type ShoppingListActions  = 
    ADDIngredient | 
    ADDIngredients |
    UpdateIngredient |
    DeleteIngredient;