import React from 'react'
import hogs from '../porkers_data';
import Filter from './Filter'
import Hog from './Hog'
import {weight} from '../keyNames'

class HogsContainer extends React.Component{
  constructor(){
    super()
    this.state = {
      hogsList: hogs, //all 13 hogs in the OG order
      filter: {sortBy: "none", showGreased: false}
    }
  }

  onChangeSortBy = (event) => {
    this.setState({
      filter: {...this.state.filter, sortBy: event.target.dataset.sort}
    })
  }

  onToggleShowGreased = () => {
    this.setState({
      filter: {...this.state.filter, showGreased: !this.state.filter.showGreased}
    })
  }

  getHogsToShow = () => {
    let hogArray = [...this.state.hogsList]
    switch (this.state.filter.sortBy) {
      case "name":
        hogArray.sort((a, b) => a.name.localeCompare(b.name))
        break;
      case "weight":
        hogArray.sort((a, b) => a[weight] - b[weight])
        break;
      default:
        hogArray = hogArray
    }
    if(this.state.filter.showGreased){
      hogArray = hogArray.filter(hog => hog.greased === true)
    }
    return hogArray
  }

  render(){
    return(
      <div>
        <Filter
         onToggleShowGreased={this.onToggleShowGreased}
         showGreased={this.state.filter.showGreased}
         onChangeSortBy={this.onChangeSortBy}
        />
        <div className="ui grid four column">
          {this.getHogsToShow().map((hogObject, index) =>
          <Hog
            hogData={hogObject}
            key={hogObject.name}
          />)}
        </div>
      </div>
    )
  }
}

export default HogsContainer
