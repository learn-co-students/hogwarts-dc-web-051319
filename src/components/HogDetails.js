import React from 'react';
import {weight, medal} from '../keyNames'

const HogDetails = (props) => {
   return (
      <div className='content'>
         <p>Greased: {props.hogData.greased.toString()}</p>
         <p>Specialty: {props.hogData.specialty}</p>
         <p>Weight: {props.hogData[weight]}</p>
         <p>Medal: {props.hogData[medal]}</p>
      </div>
   )
}

export default HogDetails