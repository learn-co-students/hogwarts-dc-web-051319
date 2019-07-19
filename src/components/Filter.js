import React from 'react'


const Filter = (props) => {
  let buttonText = props.showGreased ? "Show all" : "Show only Greased"
  return (
    <div className="ui buttons">
      <button onClick={props.onChangeSortBy} data-sort="none" className="ui button">Sort by None</button>
      <button onClick={props.onChangeSortBy} data-sort="name" className="ui button">Sort by Name</button>
      <button onClick={props.onChangeSortBy} data-sort="weight" className="ui button">Sort by Weight</button>
      <button onClick={props.onToggleShowGreased} className="ui button">{buttonText}</button>
    </div>
  )
}

export default Filter