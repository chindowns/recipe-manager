import React from 'react';
import {Button} from 'react-bootstrap'
import {currentYear} from '../../utils'
import firebase from '../../utils/Firebase'
import './index.css'

export default () => {

    // const [showModal, setShowModal] = useState(false);
    
    function signOut() {
        firebase.auth().signOut().catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            console.log(`Error: ${errorCode} : ${errorMessage}`);
            // [END_EXCLUDE]
        });
    }

    return (
    <div id="footer" className="background-peach-semitransparent text-shadow-white">
        <Button
            variant="white"
            id="feedback"
            className="text-shadow-white"
            // onClick={() => setShowModal(true)}
            >
            Leave Comment
        </Button>

        & copy; Copyright { currentYear }, All Rights Reserved

        <Button id = "signOut" onClick = {signOut}> 
        Sign Out
        </Button >
    </div>
    );
};