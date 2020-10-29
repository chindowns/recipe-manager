import React, {useState, useEffect} from 'react'
// import {useHistory} from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import SignIn from '../Modals/SignIn';
import './index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';

export default (props) => {

   const [show, setShow] = useState(false);
   const [user, setUser] = useState({})

   useEffect(() =>{
      if(props.user) {
        setUser( props.user )
      }
   },[props]);
   // const history = useHistory();

   function onClose() {
      setShow(false);
      window.opener = null;
      window.open(' ', '_self');
      window.close();
   }

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
      <div><FontAwesomeIcon icon={faUser} /> {user.email}</div> :
      <button 
         id="signInBtn" 
         className="background-red-semitransparent"
         type="submit"
         onClick={function(){setShow(true)}} >
            <FontAwesomeIcon icon={faSignInAlt} /> Sign In
      </button>}

     </header>

      {show ?
         <SignIn 
            show={show} 
            onHide={() => {setShow(false)}}
            onClose={onClose}
         />
      :
         null
      }
   </>
   )
}