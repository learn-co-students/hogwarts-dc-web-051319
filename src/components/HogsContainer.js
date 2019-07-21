import React from 'react'
import hogs from '../porkers_data';
import Filter from './Filter'
import Hog from './Hog'
class HogsContainer extends React.Component{

  constructor(){
    super()
    console.log("setting hogs container state")
    this.state = {
      hogList: hogs,
      filter: {
        sortBy: "none",
        showGreased: false
      }
    }
  }

  onShowGreasedHogs = () => {
    console.log("trying to show only greased hogs")
    this.setState({
      filter:{
        ...this.state.filter,
        showGreased: !this.state.filter.showGreased
      }
    })
  }



  onChangeSortBy = (event) => {
    console.log(event.target.dataset.sort)
    this.setState({
      filter: {
        ...this.state.filter,
        sortBy: event.target.dataset.sort
      }
    })
  }

  getFilterHogsToRender = () => {
    let hogArray = [...this.state.hogList]
    let weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"

    switch (this.state.filter.sortBy) {

      case "none":
      hogArray = hogs
      break;

      case "name":
      hogArray.sort( (a,b) => a.name.localeCompare(b.name))
      break;

      case "weight":
      hogArray.sort( (a,b) => a[weight] - b[weight] )
      break;

      default:
      hogArray = hogArray

    }

    if(this.state.filter.showGreased){
      hogArray = hogArray.filter(hogEntry =>
        { return hogEntry.greased === true}
      )
    }
    return hogArray
  }
  render() {
    return(
      <div>
      <Filter
      onShowGreasedHogs = {this.onShowGreasedHogs}
      showGreased = {this.state.filter.showGreased}
      onChangeSortBy = {this.onChangeSortBy}

      />
      <div className = "ui grid four column" >
      {this.getFilterHogsToRender().map( (hogEntry, index) =>
        <Hog  hogData = {hogEntry} key = {hogEntry.name}   />  ) }
        </div>
        </div>

      )
    }


  }

  export default HogsContainer
