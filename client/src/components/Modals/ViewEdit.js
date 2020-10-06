import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {Row, Modal} from 'react-bootstrap';
import axios from 'axios';

export default (props) => {
    const [show, setShow] = useState(false);
    const [recipe, setRecipe] = useState({});
    const [user, setUser] = useState({});

    const history = useHistory();
    let recipeTmp = props.recipe;

    console.log(props)

    useEffect(()=>{
        if(props.show){
            handleShow();
        } else {
            handleHide();
        }
    },[props.show])

    useEffect(()=>{
        if(props.recipe){
            axios.get('/api/recipe')
            setRecipe(props.recipe)
        }
    },[props.recipe])

    useEffect(()=>{
        if(props.user){
            setUser(props.user)
        }
    }, [props.user])

    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);

    console.log(props);

    return(
      <Modal show = {show} onHide={props.onHide} user={user}>
          <Modal.Header>
              <Modal.Title>
                  {recipe.name}
              </Modal.Title>
          </Modal.Header>
          <form className="form-group" onSubmit={handleSubmit}>

          </form>
            
      </Modal>
    )
}