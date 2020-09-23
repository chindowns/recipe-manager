import React, { useState, useEffect } from 'react';
import Card from '../components/Recipe-Cards'

export default () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!loading) {
            fetch("http://localhost/api/recipe")
            .then(response => response.json())
            .then(result => {
                setRecipes(result.data);
                setLoading(true);
            })
            .catch(err=> console.log(`Error: ${err}`))
        }
    }, [loading])

    return (
        <div id="cardsContainer">
            {recipes.map(recipe => {
                <Card key={recipe.id} recipe={recipe} />
            })}
        </div>
    )
}