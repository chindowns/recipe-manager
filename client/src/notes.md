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