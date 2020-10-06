import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/Recipe-Cards';

export default () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});
    const [userLoaded, setUserLoaded] = useState(false)

    useEffect(() => {
        if (!loading) {
            fetch("http://localhost/api/recipe/user/"+user.id)
            .then(response => response.json())
            .then(result => {
                setRecipes(result.data);
                setLoading(true);
            })
            .catch(err=> console.log(`Error: ${err}`))
        }
    }, [loading])

//     useEffect(() => {
//       if (!user) {
//       if (!userLoaded) {
//          setUserLoaded(true)
//       }} else {
      
//       setUser(user)
//       setUserLoaded(true);
//     }
//    }, [user, userLoaded])

    return (
        <div id="cardsContainer">
            {recipes.map(recipe => {
                return recipe.name
            })}
        </div>
    )
}