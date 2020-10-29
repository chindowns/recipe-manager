import React, { useState } from 'react';
import { FontAwesomeIcon } from "react-fontawesome";
import { faSave } from '@fortawesome/free-solid-svg-icons';
import './viewEdit.css'

export default (props) => {
  console.log(props);
  let recipe_ingredient = props.ingredient.Recipe_Ingredient;
  console.log(recipe_ingredient)

  const [ingredient, setIngredient] = useState({});
  const [recipeIngredient, setRecipeIngredient] = useState({});


  function handleSubmit() {
    setIngredient({ ...ingredient, 'recipe_ingredient': recipeIngredient })
    updateIngredient();
  }

  function updateIngredient() {
    console.log(ingredient);
    props.update(ingredient);
  }

  return (
    <div id="recipe-ingredient" className="row">
      <div id="ingredient-name" className="">
        {props.ingredient.name}
      </div>

      <div id="ingredient-amount" className="">
        {recipe_ingredient.amount}
      </div>

      <div id="ingredient-measurement" className="">
        {recipe_ingredient.measurement}
      </div>

      <div id="ingredient-specifics" className="">
        {recipe_ingredient.specifics}
      </div>
    </div>

  )
}