import React, {useState} from 'react';
import { Card, Button } from 'react-bootstrap';
import ViewEdit from '../Modals/ViewEdit'
import './index.css';

export default (props) => {
let recipe = props.recipe;
    const [show, setShow] = useState(false);

// console.log(props)
    return (
    <>
        <Card className="recipe-card" onClick={() => setShow(true)} >
            <Card.Img  src={recipe.photo} />
            <Card.Body className="background-red-semitransparent">
                <Card.Title className="text-shadow-slate">{recipe.name}</Card.Title>
            </Card.Body>
        </Card>

        <ViewEdit
            show={show}
            recipe={recipe}
            onHide={() => setShow(false)}
        />

    </>
    )
}