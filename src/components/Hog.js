import React from 'react'
import HogDetails from './HogDetails'
class Hog extends React.Component {
  constructor(){
    super()
    this.state = {
      showDetails: false
    }
  }


    onClickToShowHogDetails = () => {
      this.setState({
        showDetails: !this.state.showDetails
      })

    }
  render(){
    let hogImage = this.props.hogData.name.split(" ").join("_").toLowerCase()

    return(
    <div className = "ui card column" onClick = {() => this.onClickToShowHogDetails()}>
      <div className = "image">
        <img src= {require(`../hog-imgs/${hogImage}.jpg`)} />
      </div>
      <p> {this.props.hogData.name} </p>

      {
        this.state.showDetails ? <HogDetails hogData = {this.props.hogData} /> : null
      }

    </div>

    )
  }
}

export default Hog
