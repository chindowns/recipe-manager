# FIX THIS
- Tags and Ingredients should use default ID
- specify foreignKey as IngredientName and TagName

# Pages needed
- /
- /signinModal
- /profile
- /myrecipes (view your recipes)
- /recipe (recipe details)
- /recipe/print
- /recipeModal (pop up to use the recipe)
- /recipe/add
- /browse (all recipes with filters and search)
- /help

# Components
- footer
- user /signin-methods /signout /user
- find (filter and search)

# Utils
- firebase
- context providers

# returning users
- emaillink users will only get links when signing in from a different browser
- google, office, facebook, apple users will automatically log in if their browser is logged in
- need to enter credentials to login

# /
- similar to search with a login block fixed on the page
- large searh bar

# /profile
- show the users information and allow them to change it

# /myrecipes
- displays the user's recipes sorted in order of preference and adding.
- Higher rated recipes are displayed on top
- latest added recipe sorted next (date or recipe id?)

# ID and CLASSNAME
- APP.JS
  - page-container

- HEADER.JS
  - id="header" className="background-green"
    - h1 className="red"
    - Nav className="text-larger text-bold olive"
  - Modal Signin

- SIGNIN.JS
  - Modal.Title
  - Modal.Body
    - className = "form"
      - className = "form-group form-add"
        - className = "form-label"
          - id = "emailLink"
          - className = "brn-small"

- HOME.JS
  - className = "centerText"

- BROWSE.JS
  - className = "form"
    - id = "search"   className = "background-green-semitransparent"
  - id = "browseRecipes"  className = "display-recipes"

- RECIPE-CARDS / INDEX.JS
  - className = "recipe-card"
    - className = "background-red-semitransparent"
  - MODAL VIEWEDIT

- VIEWEDIT.JS
  - dialogClassName = "modal-80"
    - id = "view-recipe-card
      - id = "recipe-header"  className = "large-text darkerblue shadow-slate flex-item">
      - id = "flex-item  icon"

    - className = "row"
      - id="photo" className = "column"

    - id = "view-recipe-ingredient"  className = "column"

- INGREDIENT.JS
  . id = "recipe-ingredient"  classname = "row"
    - id = "ingredient-name"
    - id = "ingredient-amount"
    - id = "ingredient-measurment"
    - id = "ingredient-specifics"

    