import React, { useState, useEffect } from 'react';
import {Row} from 'react-bootstrap';
import RecipeCard from '../components/Recipe-Cards'
import axios from 'axios';

export default (props) => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showAddRecipe, setShowAddRecipe] = useState(false);
    const [search, setSearch] = useState("");

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

    function handleSubmit(e) {
        e.preventDefault();
    }

    console.log(recipes);
    console.log(props.user);
    
    return (
      <>
        <div className="form">
            <form id="search-form" className="form-group form-search" onSubmit={handleSubmit}>
                <input 
                    id="search" 
                    classname="background-green-semitransparent" 
                    type="text"
                    name="search"
                    placeholder="Search Recipes"
                    onClick={e => setSearch(e.target.value)}
            </form>
        </div>
        <Row id="" className="row-col-4">
            {recipes.map(recipe => (
                <RecipeCard recipe = {recipe} user = {props.user} key = {recipe.id} />
            ))}
        </Row>
      </>  
    )
}