import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Ingredient from './ingredient'
import './viewEdit.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from '@fortawesome/free-regular-svg-icons';

export default (props) => {
  const [show, setShow] = useState(false);
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [directions, setDirections] = useState([]);
  const [tags, setTags] = useState([]);
  const [user, setUser] = useState({});
  const [edit, setEdit] = useState(false);

  const history = useHistory();

  // Setting temp arrays to enable updating individual elements in an array.
  let ingredArrUpd = recipe.Ingredients;
  let tagsArrUpdate = recipe.Tags;
  let directArrUpdate = recipe.Directions;

  useEffect(() => {
    if (props.recipe) {
      axios.get('/api/recipe/one/' + props.recipe.id)
        .then(result => {
          setRecipe(result.data);
          // setIngredients(result.data.Ingredients);
          // setDirections(result.data.Directions);
          // setTags(result.data.Tags);
          // console.log(result.data);
        })
        .catch(err => console.log(err))
    };

  }, [props.recipe])

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);
  const handleEdit = () => setEdit(true);
  const handleSubmit = () => {
    console.log(recipe);
  }
  const updateIngredients = () => setIngredients(ingredArrUpd);
  const updateRecipe = () => {
    setRecipe({ ...recipe, 
      'Ingredients': ingredArrUpd,
      'Directions': directArrUpdate,
      'Tags' : tagsArrUpdate
    })
    }

  return (
    <Modal dialogClassName="modal-80" show={show} onHide={props.onHide} >
      <row id="view-recipe-card">
        <div id="recipe-card-title" className="background-green-semitransparent darkerblue shadow-white">
          {recipe.name} 
        </div>
      </row>
    
    </Modal>
  )
}