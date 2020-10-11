import React, { useState, useEffect } from 'react';

export default (props) => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!loading) {
            fetch("http://localhost/api/recipe/user/"+props.user.id)
            .then(response => response.json())
            .then(result => {
                setRecipes(result.data);
                setLoading(true);
            })
            .catch(err=> console.log(`Error: ${err}`))
        }
    }, [loading, props.user.id])

    return (
        <div id="cardsContainer">
            {recipes.map(recipe => {
                return recipe.name
            })}
        </div>
    )
}