# Recipe Manager



# Eager Loading Examples
## Create Recipe
``` Javascript Object for Recipe
{
    "name": "Salsa",
    "servings": "6",
    "photo": "https://www.rickbayless.com/wp-content/uploads/2013/12/Screen-Shot-2014-04-01-at-4.20.57-PM-600x315.png",
    "source": "Rick Bayless",
    "directions": [
        "Light a charcoal fire and let the coals burn until they are covered with gray ash; position the grill grate and let it heat for a couple of minutes.",
        "Lay on the tomatoes, onion halves, jalapeños and garlic. (To keep the garlic from dropping through and to make cleanup easy, I typically lay one of those perforated grill pans on the grill grates, heat it up, then lay on the vegetables.)", 
        "Grill the ingredients, turning occasionally, until they are well charred—about 10 minutes for the garlic, 15 minutes for the chiles and 20 minutes for the tomatoes and onions. As they are done remove the ingredients to a rimmed baking sheet.", 
        "Let cool. Peel the garlic. If you wish, you can pull the charred skins off the tomatoes.",
        "In a food processor, combine the garlic and chiles. Pulse until coarsely pureed.", 
        "Add the tomatoes and any juices that have collected on the baking sheet, and pulse until roughly chopped",
        "Chop the charred onion and place in a bowl. Stir in the tomato mixture, along with a little water (usually about 2 tablespoons), to give the salsa an easily spoonable consistency.",
        "Taste and season with salt, usually about 1 teaspoon."
        ],
    "ingredients": [
        {"name": "tomato",   
            "Recipe_Ingredient": {"specifics": "fresh red ripe round", "amount": "4", "measurement": "whole"} },
        {"name": "onion", 
            "Recipe_Ingredient": {"specifics": "medium white, cut in half", "amount": "1", "measurement": "whole"}},
        {"name": "jalapeno", 
            "Recipe_Ingredient": {"specifics": "fresh and stemmed", "amount": "4", "measurement": "whole"}},
        {"name": "garlic", 
            "Recipe_Ingredient": {"amount": "4", "measurement": "cloves"}},
        {"name": "salt",
            "Recipe_Ingredient": {"measurement": "to taste"}}
    ],
    "tags": [
        {"name": "Salsa"},
        {"name": "Medican"}
    ]

}
```
NOTE that SALT did not have an ID.  In this case the Recipe Controller creates a new ingredient for SALT.