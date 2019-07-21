import React from 'react'

const Filter = (props) => {
    let greasedButtonText = props.showGreased ? "Show All": "Show Greased Hogs"
  return(
    <div>
    <div className="ui buttons">
      <button className="ui button" data-sort = "none" onClick = {props.onChangeSortBy} >
      Sort By None: </button>
      <button className="ui button" data-sort = "name" onClick = {props.onChangeSortBy} >
      Sort By Name: </button>
      <button className="ui button" data-sort = "weight" onClick = {props.onChangeSortBy} >
      Sort By Weight: </button>
      <button className="ui button" onClick = {props.onShowGreasedHogs} >
      {greasedButtonText}:  </button>
    </div>
    </div>
  )
}
export default Filter
