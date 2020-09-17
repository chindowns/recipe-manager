# Recipe Manager



# Eager Loading Examples
## Create Recipe
``` Javascript Object for Recipe
{
    "name": "Lazy Salsa (Salsa Huevona)",
    "servingSize": "6",
    "source": "Rick Bayless",
    "directions": [
        "Put water in a pot or tea kettle",
        "Place on stove until steaming",
        "Carefully poor into glass"
        ],
    "ingredients": [
        {"name": "tomato", "id": 1,  
            "Recipe_Ingredient": {"specifics": "fresh red ripe round", "amount": "4", "measurement": "whole"} },
        {"name": "onion", "id": 2,
            "Recipe_Ingredient": {"specifics": "medium white, cut in half", "amount": "1", "measurement": "whole"}},
        {"name": "jalapeno", "id": 3,
            "Recipe_Ingredient": {"specifics": "fresh and stemmed", "amount": "4", "measurement": "whole"}},
        {"name": "garlic", "id": 4,
            "Recipe_Ingredient": {"amount": "4", "measurement": "cloves"}},
        {"name": "salt",
            "Recipe_Ingredient": {"amount": "", "measurement": "to taste"}}
    ]

}
```
NOTE that SALT did not have an ID.  In this case the Recipe Controller creates a new ingredient for SALT.