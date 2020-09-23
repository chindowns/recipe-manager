import React, { useState, useEffect } from 'react';
import Card from '../components/Recipe-Cards'
import useContext from '../utils/Provider'

export default () => {
   const [state, dispatch] = useContext();
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(state.user);
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

    useEffect(() => {
      if (!user) {
      if (!userLoaded) {
         setUserLoaded(true)
      }} else {
      
      setUser(state.user)
      setUserLoaded(true);
    }
   }, [user, userLoaded])

    return (
        <div id="cardsContainer">
            {recipes.map(recipe => {
                <Card key={recipe.id} recipe={recipe} />
            })}
        </div>
    )
}