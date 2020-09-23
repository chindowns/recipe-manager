import React from 'react'
import { Nav } from 'react-bootstrap';
import Profile from 'Profile';
import './index.css'

export default () => {

   return (
      <>
      <h1 className="red">Recipe Organizer</h1>
      <Nav />
      <Profile />
      </>
   )
}