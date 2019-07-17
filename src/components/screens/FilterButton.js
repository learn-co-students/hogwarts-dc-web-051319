import React from 'react'

const FilterButton = (props) => {
    return (
        <div>
            <button className="ui button" onClick={props.isGreased}>
                {(props.greased) ? "All Hogs" : "Greased Hogs"}
            </button>

            <select className="ui selection dropdown" onChange={props.sortHogs}>
                <option className="item" value="all">All</option>
                <option className="item" value="name">Name</option>
                <option className="item" value="weight">Weight</option>
            </select>
        </div>
    )
}

export default FilterButton