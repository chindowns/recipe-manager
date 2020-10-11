import React, {useState} from 'react';
import { Card } from 'react-bootstrap';
import ViewEdit from '../ViewEdit/viewEdit'
import './index.css';

export default (props) => {
let recipe = props.recipe;
    const [show, setShow] = useState(false);

// console.log(props)
    return (
    <>
        <Card className="recipe-card" onClick={() => setShow(true)} >
            <Card.Img  height="250px" src={recipe.photo} />
            <Card.Body className="background-red-semitransparent">
                <Card.Title className="text-shadow-slate">{recipe.name}</Card.Title>
            </Card.Body>
        </Card>

        <ViewEdit
            show={show}
            recipe={recipe}
            user={props.user}
            onHide={() => setShow(false)}
        />

    </>
    )
}