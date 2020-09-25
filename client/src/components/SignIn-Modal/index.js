import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap';

function ModalSignIn(props) {
    const [show, setShow] = useState(false);
    // const [loading, setLoading] = useState(true);

    console.log(props)

    useEffect(()=>{
        if(props.show) {
            handleShow();
        }
    },[props.show])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>

                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default ModalSignIn;