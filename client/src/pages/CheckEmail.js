import React from 'react';
import Button from 'react-bootstrap/Button';

export default () => {

    function onClose() {
        window.opener = null;
        window.open('', '_self');
        window.close();
    }
    return (
        <>
        <h2 className="centerText">Check your email and open the link from your email to signin</h2>
        <Button className="centerText" onClick={onClose} >Close Windw</Button>
        </>
    )
}