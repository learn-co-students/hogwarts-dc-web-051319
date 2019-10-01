import React from 'react';

export const Grid = ({ children }) => {
  return (
    <div className="ui four column grid container">
      {children}
    </div>
  );
}

export const Column = ({ children }) => {
  return (
    <div className="column">
      {children}
    </div>
  );
}

export const Card = ({ hog }) => {


  const {
    name, greased, specialty, weight } = hog

  const hogImage = name.toLowerCase().split(" ").join("_") + '.jpg'

  let { 'highest medal achieved': medal } = hog

  switch (medal) {
    case "diamond":
      medal = "💎"
      break
    case "platinum":
      medal = "🎖️"
      break
    case "gold":
      medal = "🥇"
      break
    case "silver":
      medal = "🥈"
      break
    case "bronze":
      medal = "🥉"
      break
    case "wood":
      medal = "🥔"
      break
    default:
      medal = "🐖"
  }

  return (
    <div className="ui card">
      <div className="image">
        <img src={require(`../hog-imgs/${hogImage}`)} alt={name} />
      </div>
      <div className="content">
        <a className="header">{medal} {name}</a>
        <div className="meta">
          <span className="date">{greased ? "A Greased" : "An Ungreased"} Pig</span>
        </div>
        <div className="description">
          Specialty: {specialty}
        </div>
      </div>
      <div className="extra content">
        Weight: {weight} Refrigerators
      </div>
    </div>
  )
}