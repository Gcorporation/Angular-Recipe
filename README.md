## URL of the app hosted on Firebase

https://angular-recipe-ff8d9.web.app/auth

## Login/SignUp

1. Upon opening the app, user will be redirected to Authenticate page where they will be asked to login or signup.
2. Both login and signup are integrated with Firebase. If the record already exist, user will be able to login else they will be required to signup.

## Dashboard

1. On reaching dashboard page, user will have access to create a new recipe or select and edit existing recipes.
2. Click on manage dropdown on top right corner, and click fetch recipes. This will fetch records that are stored in our Firebase Database.
3. The stored recipes will be loaded.

## New Recipes

1. Click on New Recipe to add new recipes to the Database.
2. A Reactive form will open to enter name, url, description and ingredients of the recipe.
3. after entering the details click on save.
4. Click on top right drop down and click on save data. This will save data to Firebase.