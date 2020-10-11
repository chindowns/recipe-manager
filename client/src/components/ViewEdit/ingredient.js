import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from '@fortawesome/free-regular-svg-icons';

export default (props) => {
  console.log(props);
  const [ingredient, setIngredient] = useState({});
  const [recipeIngredient, setRecipeIngredient] = useState({});
  const [edit, setEdit] = useState(false);

  const toggleEdit = () => edit ? setEdit(false) : setEdit(true);

  function handleSubmit() {
    setIngredient({...ingredient, 'Recipe_Ingredient' : recipeIngredient})
    updateIngredient();
  }

  function updateIngredient() {
    console.log(ingredient);
    props.update(ingredient);
  }

  return (
      <>
        <form className="form-group ingredient" onSubmit={handleSubmit}>
          <div id="ingredient">
            <input
              id={props.ingredient.naame}
              type="text"
              name="IngredientName"
              defaultValue={props.ingredient.name}
              onChange={e => setIngredient({ ...ingredient, 'name': e.target.value ? e.target.value : props.ingredient.name })}
            />
          </div>
          <div>
            {props.edit ?
              <input
                type="text"
                name="amount"
                defaultValue={props.ingredient.Recipe_Ingredient.amount}
                onChange={e => setRecipeIngredient({ ...recipeIngredient, 'amount': e.target.value ? e.target.value : props.ingredient.Recipe_Ingredient.amount })}
              />
              :
              props.ingredient.Recipe_Ingredient.amount
            }
          </div>
          <div>
            {props.edit ?
              <input
                type="text"
                name="measurement"
                defaultValue={props.ingredient.Recipe_Ingredient.measurement}
                onChange={e => setRecipeIngredient({ ...recipeIngredient, 'measurement': e.target.value ? e.target.value : props.ingredient.Recipe_Ingredient.measurement })}
              />
              :
              props.ingredient.Recipe_Ingredient.measurement
            }
          </div>
          <div>
            {props.edit ?
              <input
                type="text"
                name="specifics"
                defaultValue={props.ingredient.Recipe_Ingredient.specifics}
                onChange={e => setRecipeIngredient({ ...recipeIngredient, 'specifics': e.target.value ? e.target.value : props.ingredient.Recipe_Ingredient.specifics })}
              />
              :
              props.ingredient.Recipe_Ingredient.specifics
            }
          </div>
          <FontAwesomeIcon id="saveIcon" icon={faSave} onClick={handleSubmit} />
        </form>

      </>

  )
}