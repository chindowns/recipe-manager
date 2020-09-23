import React from 'react';
import {Buttom} from 'react-bootstrap'
import './index.css'

export default () => {

    const [showModal, setShowModal] = useState(false);

    return (
    <>
        <Button
            variant="white"
            id="feedback"
            onClick={() => setShowModal(true)} >
            Leave Comment
        </Button>


        & copy; Copyright { currentYear }, All Rights Reserved

        <Button id = "signout" onClick = {() => signout()}> 
        Sign Out
        </Button >
    </>
    );
};