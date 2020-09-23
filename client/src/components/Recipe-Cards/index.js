import React from 'react';
import 'index.css'

export default (props) => {
let recipe = props.recipe;
console.log(props)
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={recipe.photo} />
        <Card.Body>
            <Card.Title>{recipe.name}</Card.Title>
            {/* <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text> */}
            <Button variant="primary">View</Button>
        </Card.Body>
    </Card>
    )
}