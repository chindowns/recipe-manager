const dups = require('./twol-dups.json');
const fs = require('fs');

var uniqueRecipes = {};

dups.forEach(recipe => {
   let name = recipe.name;
   if(!uniqueRecipes[name]) {
      uniqueRecipes[name] = recipe;

      fs.appendFile('./twol.json', JSON.stringify(recipe) + ',\n', (err) => {
         if (err) {console.log(err)}
      })
   }
})