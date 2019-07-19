import React from 'react'
import HogDetails from './HogDetails'

class Hog extends React.Component {
  constructor(){
    super()
    this.state = {
      showDetails: false
    }
  }

  onToggleDetails = () => {
      this.setState({showDetails: !this.state.showDetails})
  }

  render(){
    let hogImage = this.props.hogData.name.split(" ").join("_").toLowerCase()
    return (
      <div className="ui card column" onClick={this.onToggleDetails}>
        <div className="image">
          <img src={require(`../hog-imgs/${hogImage}.jpg`)} />
          <p>{this.props.hogData.name}</p>
        </div>
        {
          this.state.showDetails ? <HogDetails hogData={this.props.hogData}/> : null
        }
      </div>
    )
  }
}

export default Hog
