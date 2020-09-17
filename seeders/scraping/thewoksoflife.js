var cheerio = require("cheerio");
var axios = require('axios');
var fs = require('fs');

console.log(
    `\n*************************************\n
    Grab the recipes from 
    The WOks of Life website
    \n*************************************\n`);

function getSearchList(getRecipes) {
    // fs.readFile('twol-list.json', (err, listFile) =>{
    //     searchList = listFile;
    // })

    let searchList = ['cha-gio-vietnamese-fried-spring-rolls', "classic-pork-fried-rice"]

    getRecipes(searchList);
}

getSearchList((searchList) => {
    // Declare variables

    searchList.forEach(getRecipe => {
        let url = `https://thewoksoflife.com/${getRecipe}`
        console.log(`Get ${url}`)
        axios.get(url).then(response => {
            let recipe = {};
            let tagArr = [];
            let ingredientsArr = [];
            let directionsArr = [];

            let recipe_source = "The Woks of Life";

            let $ = cheerio.load(response.data);

            // recipe name
            $("h2.wprm-recipe-name").each(function (i, element) {
                recipe_name = $(element).text()
            })

            // recipe photo
            $("div.wprm-recipe-image").each((i, element) => {
                recipe_photo = $(element).children().attr("src");
            })

            // servingSize
            $("span.wprm-recipe-servings").each((i, element) => {
                recipe_servings = $(element).text()
            })

            // active time
            $("span.wprm-recipe-cook_time-minutes").each((i, element) => {
                recipe_activeTime = $(element).text()
            })
            // total time
            $("span.wprm-recipe-total_time-minutes").each((i, element) => {
                recipe_totalTime = $(element).text()
            })
            // course push to tag 
            $("span.wprm-recipe-course").each((i, element) => {
                let tagCourse = {
                    "tag": $(element).text(),
                    "Recipe_Tag": {
                        "category": "course"
                    }
                }
                tagArr.push(tagCourse);
            })

            // cuisine push to tag
            $("span.wprm-recipe-cuisine").each((i, element) => {
                let tagCuisine = {
                    "tag": $(element).text(),
                    "Recipe_Tag": {
                        "catgory": "cuisine"
                    }
                }
                tagArr.push(tagCuisine);
            })

            // keyword push to tag
            $("span.wprm-recipe-keyword").each((i, element) => {
                let tagKeyword = {
                    "tag": $(element).text(),
                    "Recipe_Tag": {
                        "catgory": "keyword"
                    }
                }
                tagArr.push(tagKeyword);
            })


            // ingredient: li.wprm-recipe-ingredient
            $("li.wprm-recipe-ingredient").each((i, element) => {
                // ingredient.name
                let name = $(element).children(".wprm-recipe-ingredient-name").text();
                // ingredient.Recipe_Ingredient.amount
                let amount = $(element).children(".wprm-recipe-ingredient-amount").text();
                // ingredient.Recipe_Ingredient.measurement
                let measurement = $(element).children(".wprm-recipe-ingredient-unit").text();
                // ingredient.Recipe_Ingredient.specifics
                let specifics = $(element).children(".wprm-recipe-ingredient-notes").text();

                ingredientsArr.push(({
                    name: name,
                    Recipe_Ingredient: {
                        specifics: specifics,
                        amount: amount,
                        measurement: measurement
                    }
                }));
            });

            // Directions = ul.wprm-recipe-instructions
            // direction: li.wprm-recipe-instruction
            $("div.wprm-recipe-instruction-text").each((i, element) => {
                directionsArr.push($(element).text());
            })

            let ingredients = JSON.stringify(ingredientsArr)
            let tags = JSON.stringify(tagArr);
            recipe = JSON.stringify({
                name: recipe_name,
                source: recipe_source,
                servings: recipe_servings,
                activeTime: recipe_activeTime,
                totalTime: recipe_totalTime,
                directions: directionsArr,
                ingredients: ingredients,
                tags: tags
            });
            const config = {
                method: 'post',
                url: 'http://localhost:8080/api/recipe',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: recipe
            };
            axios(config)
                .then(resp => console.log(resp.data))
                .catch(err => console.log(err));

            fs.appendFile('../twol.json', recipe + ',\n')
        })
    })
    writeToFile(recipeArr);
})