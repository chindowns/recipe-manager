import React, { useState } from 'react';
import { FontAwesomeIcon } from "react-fontawesome";
import { faSave } from '@fortawesome/free-solid-svg-icons';
import './viewEdit.css'

export default (props) => {
  console.log(props);
  let direction = props.direction;
  console.log(direction)

  return (
    <div id="recipe-direction" className="flex-container">
      <div id="" className="step">
        {direction.step}
      </div>

      <div id="" className="direction">
        {direction.direction}
      </div>

    </div>

  )
}