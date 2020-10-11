import React, {useState, useEffect} from 'react';
import firebase from '../../utils/Firebase';
import {Modal, Button} from 'react-bootstrap';

export default (props) => {

    const [email, setEmail] = useState(null);
    const [emailSent, setEmailSent] = useState(false);
    const [show, setShow] = useState(null);

    useEffect(()=>{
        if(props.show){
            handleShow();
        }
    }, [props.show])

    function handleShow() {setShow(true)};
    function handleHide() {
        window.opener=null;
        window.open('','_self');
        window.close();
        setShow(false);
    };
        
    function handleSubmit(e) {
    // FIREBASE SignIn by Email Link Settings
        e.preventDefault();
        // console.log(email);

        let url = null;

        if (process.env.NODE_ENV === "production") {
            url = 'https://your-recipes.chindowns.app/profile';
        } else {
            url = 'http://localhost:3000/profile';
        }

        const actionCodeSettings = {
            url: url,
            handleCodeInApp: true,
            iOS: {},
            android: {}
        }

            // SEND email for authentication
            firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
                .then(() => {
                    window.localStorage.setItem('emailForSignIn', email);
                    setEmailSent(true);
                    // make a message notifying user to check their email
                    // console.log(`Sending signin link to ${email}`)
                })
                .catch(err => console.log(err));
        // }
    
    }

    return (
        !emailSent ?
        <Modal show = {show} onHide={props.onHide}>
            <Modal.Header>
                <Modal.Title>Sign In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <div className='form'>
                        <form className="form-group form-add" onSubmit={handleSubmit}>
                            <label className="form-label">Enter Email to Sign In<br />
                                <input id="emailLink"
                                    type="text"
                                    name="emailLink"
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="Enter email" />
                            </label>
                            <br />
                            <button className='btn-small' type='submit'>Send Link</button>
                        </form>
                    </div>
            </Modal.Body>
        </Modal>
        :
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Title>Sign In ... In Process</Modal.Title>
            <Modal.Body>Check your email and click the link to open Your Recipes</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleHide} >Close</Button>
            </Modal.Footer>
        </Modal>
    )
}