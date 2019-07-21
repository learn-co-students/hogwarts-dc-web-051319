import React from 'react'

const hogWeight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"

const hogMedal = "highest medal achieved"

const HogDetails = (props) => {
console.log(props.hogData)
  return(
    <div className = "content">
    <p>Greased: {props.hogData.greased.toString()}</p>
    <p>Specialty: {props.hogData.specialty}</p>
    <p>Weight: {props.hogData[hogWeight]}</p>
    <p>Medal: {props.hogData[hogMedal]}</p>

    </div>


  )
}
export default HogDetails
