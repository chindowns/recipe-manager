import React, {useState, useEffect} from 'react'
// import {useHistory} from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap';
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
            <Nav />
            {user.id} is logged in
            <Button 
               id="signInBtn" 
               className="" 
               onClick={function(){setShow(true)}} >Sign In</Button>
               
         </header>

         <SignIn 
            show={show} 
            onHide={() => {
               setShow(false);
            }} 
            // checkEmail={() => {
            //    setShow(false);
            //    window.opener=null;
            //    window.open('','_self')
            //    window.close();
            //    history.replace('/checkEmail')
            // }}
         />
      </>
   )
}