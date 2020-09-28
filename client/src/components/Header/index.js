import React, {useState} from 'react'
import { Nav, Button, Modal } from 'react-bootstrap';
import Profile from '../../pages/Profile';
import SignIn from '../Modals/SignIn';
import './index.css'

export default () => {

   const [show, setShow] = useState(false);

   return (
      <>
         <header id="header" className="background-green">
            <h1 className="red">Recipe Organizer</h1>
            <Nav />
            <Button 
               id="signInBtn" 
               className="" 
               onClick={function(){setShow(true)}} >Sign In</Button>
         </header>

         <SignIn show={show} onHide={() => setShow(false)} />
      </>
   )
}