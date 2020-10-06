import React, {useState, useEffect} from 'react'
// import {useHistory} from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SignIn from '../Modals/SignIn';
import './index.css'

export default (props) => {

   const [show, setShow] = useState(false);
   const [user, setUser] = useState({})

   useEffect(() =>{
      if(props.user) {
        setUser( props.user )
      }
   },[props]);
   // const history = useHistory();

   return (
   <>
     <header id="header" className="background-green">
      <h1 className="red">Recipe Organizer</h1>

      <Nav>
         <Nav.Link className="text-larger text-bold olive" href="/browse" >Browse</Nav.Link>
         <Nav.Link className="text-larger text-bold olive" href="/profile" >Profile</Nav.Link>
         <Nav.Link className="text-larger text-bold olive" href="/myRecipes" >My Recipes</Nav.Link>
      </Nav>

      {user.hasOwnProperty('id') ?
      user.email :
      <button 
         id="signInBtn" 
         className="fas fa-sign-in-alt background-red-semitransparent"
         type="submit"
         onClick={function(){setShow(true)}} >Sign In
      </button>}
     </header>

      <SignIn 
         show={show} 
         onHide={() => {setShow(false)}} 
      />
   </>
   )
}