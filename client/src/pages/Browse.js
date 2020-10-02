import React, { useState, useEffect } from 'react';
import {Row} from 'react-bootstrap';
import RecipeCard from '../components/Recipe-Cards'
import axios from 'axios';

export default (props) => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showAddRecipe, setShowAddRecipe] = useState(false);

    useEffect(() => {
        if (!loading) {
            axios.get("api/recipe")
            .then(result => {
                if (result.data.length > 0) {
                setRecipes(result.data);
                setLoading(true);
                } else {
                    setShowAddRecipe(true);
                }
            })
            .catch(err=> console.log(`Error: ${err}`))
        }
    }, [loading])

    console.log(recipes);
    console.log(props.user);
    
    return (
        <Row id="" className="row-col-4">
            {recipes.map(recipe => (
                <RecipeCard recipe = {recipe} user = {props.user} key = {recipe.id} />
            ))}
        </Row>
    )
}