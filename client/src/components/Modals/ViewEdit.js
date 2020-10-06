import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {Row, Modal} from 'react-bootstrap';
import axios from 'axios';
import './modals.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEdit} from '@fortawesome/free-regular-svg-icons';

export default (props) => {
    const [show, setShow] = useState(false);
    const [recipe, setRecipe] = useState({});
    const [user, setUser] = useState({});
    const [edit, setEdit] = useState(false);

    const history = useHistory();

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
            axios.get('/api/recipe/one/'+props.recipe.id)
            .then(result => {
                setRecipe(result.data)
                console.log(result.data)
            })
            .catch(err => console.log(err))
        }
    },[props.recipe])

    useEffect(()=>{
        if(props.user){
            setUser(props.user)
        }
    }, [props.user])

    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);
    const handleEdit = () => setEdit(true);
    const handleSubmit = () => {
        console.log(recipe);
    }

    console.log(props);

    return(
      <Modal size="lg" show = {show} onHide={props.onHide} user={user}>
          <FontAwesomeIcon id="editIcon" className="alignRight" icon={faEdit} size="1.75x" onClick={handleEdit} />
            <form className="form-group" >
          <Modal.Header>
              <Modal.Title>
                <input
                    id="editName"
                    type="text"
                    defaultValue={recipe.name}
                    onChange = {e => setRecipe({ ...recipe, 'name' : e.target.value ? e.target.value : recipe.name})}
                />
              </Modal.Title>
          </Modal.Header>
            <label className="form-label">Source<br />
                <input 
                    id="editSource"
                    readOnly="readOnly"
                    type="text"
                    name="company"
                    value={user.source}
                />

            </label>

        </form>    
      </Modal>
    )
}