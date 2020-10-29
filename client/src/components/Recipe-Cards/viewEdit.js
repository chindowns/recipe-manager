import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { Modal, Row } from 'react-bootstrap';
import './viewEdit.css';
import Ingredient from './ingredient';
import Direction from './direcion';
import axios from 'axios';
import {sort} from '../../utils'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faEdit } from '@fortawesome/free-regular-svg-icons';


export default (props) => {
  console.log(props)

  const [recipe, setRecipe] = useState({});
  const [edit, setEdit] = useState(false);

  // const history = useHistory();

  if (props.recipe.hasOwnProperty('id')) {
    var ingredientsArr = props.recipe.Ingredients
    var directionsArr = props.recipe.Directions
    var tagsArr = props.recipe.Tags
  }

  // useEffect(() => {
  //   if (props.recipe && props.show) {
  //     axios.get('api/recipe/one/'+props.recipe.id)
  //     .then(result => {setRecipe(result.data); console.log(result.data)})
  //     .catch(err => console.log(err));

  //     handleshow();
  //   }
  // }, [props.recipe, props.show])

  function copyRecipe(copy) {
    console.log('setting recipe userId')
    setRecipe(...recipe, { 'userId': props.user.id });
    copy(recipe);
  }

  function handleEdit() {
    console.log(props.recipe.userId, props.user.id)
    if (props.recipe.userId === props.user.id) {
      setEdit(true);
    } else {
      // set the userId for the recipe then copy the recipe with a callback function for axios to send API Call to update the database
      copyRecipe(function (recipe) {
        axios.post('api/recipe/copy', recipe)
          .then(result => {
            setRecipe(result.data);
            setEdit(true);
          })
          .catch(err => console.log(err))
      }
      )
    }

  }

  function handleUpdate() {
    let recipeUpdate = {
      'id': recipe.id,
      'name': recipe.name,
      'Directions': directionsArr,
      'Ingredients': ingredientsArr,
      'Tags': tagsArr,
      'servings': recipe.servings,
      'activeTime': recipe.activeTime,
      'totalTime': recipe.totalTime,
      'photo': recipe.photo,
      'source': recipe.source,
      'sourceLink': recipe.sourceLink,
      'ratingAverage': recipe.ratingAverage,
      'ratingCount': recipe.ratingCount,
      'ratingTotal': recipe.ratingTotal
    }
    console.log(recipeUpdate);
  }

  return (
    <Modal dialogClassName="modal-80" show={props.show} onHide={props.onHide} className="">
      {/* {edit ?
      // display Edit-Recipe-Form when edit is TRUE
      <div id="view-recipe-card">
        <form  className="background-green-semitransparent recipe-header" onSubmit={handleUpdate}>
          <FontAwesomeIcon icon={faSave} className="large-text" onclick={handleUpdate} />
          <div id="recipe-card-title" className="large-text darkerblue shadow-slate">
            {props.recipe.name}
          </div>
        </form>

        <div id="view-recipe-ingredient" className="">
          {ingredientsArr.map((ingredient, idx) => (
            <Ingredient ingredient={ingredient} key={idx} item={idx} user={props.user} />
          ))}
        </div>
      </div>
      : */}
      {/* display values for view */}
      <div id="view-recipe-card" className="" >
        <div id="recipe-header" className="background-green-semitransparent flex-container">
          <div id="recipe-card-title" className="large-text darkerblue shadow-slate flex-item">
            {props.recipe.name}
          </div>
          <div className="flex-item icon" onClick={handleEdit} >
            <FontAwesomeIcon icon={faEdit} size="" className="" /> Edit
          </div>
        </div>

        <div className="row">      
          <div id="view-recipe-ingredient" className="column">
            {props.recipe.sourceLink ? 
            <a href={props.recipe.sourceLink} target="_blank">{props.recipe.source}</a>
            : 
            <div>Source: {props.recipe.source}</div>}
            
            <div>Servings: {props.recipe.servings}</div>
            <div>Active Time: {props.recipe.activeTime}</div>
            <div>Total Time: {props.recipe.totalTime}</div>

            <div><h3 className="color6 underline shadow-slate">Ingredients</h3></div>
            {ingredientsArr.map((ingredient, idx) => (
              <Ingredient ingredient={ingredient} key={idx} item={idx} />
            ))}
          </div>

          <div id="photo-column" className="column ">
            <img src={props.recipe.photo} width="250px" />
          </div>
        </div>

        <div className="column">
          <h2 className="color6 underline shadow-slate flex-container">Directions</h2>
          {directionsArr.map((direction, idx) => (
            <Direction direction={direction} key={idx} item={idx} />
          ))}
        </div>

      </div>
      {/* } */}
    </Modal>
  )
}