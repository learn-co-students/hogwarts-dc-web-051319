import piggy from '../porco.png'
import React from 'react'

const Nav = ({ filterGreased, sortByName, sortByWeight }) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>

			<form id="pig-filter">
				<input type="checkbox" name="greased" onChange={filterGreased} /> Greased Only?&nbsp;
				<button onClick={sortByName}>Sort by Name</button>&nbsp;
				<button onClick={sortByWeight}>Sort by Weight</button>
			</form>
		</div>
	)
}

export default Nav
