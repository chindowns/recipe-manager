import React, { useState, useEffect } from 'react';
import {Button} from 'react-bootstrap'
import {currentYear} from '../../utils'
import './index.css'

export default () => {

    const [showModal, setShowModal] = useState(false);
    
    function signOut() {}

    return (
    <>
        <Button
            variant="white"
            id="feedback"
            onClick={() => setShowModal(true)} >
            Leave Comment
        </Button>

        & copy; Copyright { currentYear }, All Rights Reserved

        <Button id = "signOut" onClick = {() => signOut()}> 
        Sign Out
        </Button >
    </>
    );
};