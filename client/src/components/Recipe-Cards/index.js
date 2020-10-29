import React, {useState} from 'react';
import { Card } from 'react-bootstrap';
import ViewEdit from './viewEdit';
import './recipe-cards.css';

export default (props) => {
  console.log(props);
  let recipe = props.recipe;
  const [show, setShow] = useState(false);

  console.log(show)

  return (
  <>
    <Card className="recipe-card" onClick={() => setShow(true)} >
      <Card.Img  height="250px" src={recipe.photo} />
      <Card.Body className="background-red-semitransparent">
          <Card.Title className="">{recipe.name}</Card.Title>
      </Card.Body>
    </Card>

  {show ? <ViewEdit
      show={show}
      recipe={props.recipe}
      user={props.user}
      onHide={() => setShow(false)}
    />
  : null}
  </>
  )
}