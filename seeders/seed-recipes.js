const twolRecipes = require('./twol.json');
const axios = require('axios');

twolRecipes.forEach(recipe => {
    let loadRecipe = JSON.stringify(recipe)
    
const config = {
    method: 'post',
    url: 'http://localhost:8080/api/recipe',
    headers: {
        'Content-type': 'application/json'
    },
    data: recipe
};
axios(config)
.then(resp => console.log(`Added Recipe: ${recipe.name}`))
.catch(err => console.log('Error' + err));

})

