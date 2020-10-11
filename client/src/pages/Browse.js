import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/Recipe-Cards';
import axios from 'axios';

export default (props) => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        axios.get("api/recipe/search/"+search)
            .then(result => {
                let recipesUnique = result.data;
                if (recipesUnique.length > 0) {
                    setRecipes(recipesUnique);
                }})
            .catch(err => console.log(`Error: ${err}`))
    }

    console.log(recipes);
    console.log(loading)
    
    return (
      <>
        {/* <div className="form">
            <form onSubmit={handleSubmit}>
                <input 
                    id="search" 
                    className="background-green-semitransparent" 
                    type="text"
                    name="search"
                    placeholder="Search Recipes"
                    onClick={e => setSearch(e.target.value)}
                />
            </form>
        </div> */}
        <div id="browseRecipes" className="display-recipes">
            {recipes.map(recipe => (
                <RecipeCard recipe={recipe} user={props.user} key={recipe.id} />
            ))}
        </div>
      </>  
    )
}