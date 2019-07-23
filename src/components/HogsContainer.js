import React, { Component } from 'react';
import hogs from '../porkers_data';
import Hog from './Hog'
import Filter from './Filter'
import { weight } from '../keyNames';

class HogsContainer extends Component {
   constructor() {
      super();
      this.state = {
         hogsList: hogs,
         filter: {
            sortBy: 'none',
            showGreased: false
         }
      }
   }

   onToggleShowGreased = () => {
      this.setState({ 
         filter: {
            ...this.state.filter,
            showGreased: !this.state.filter.showGreased  
         }
      });
   }

   getHogsToShow = () => {
      let hogArray = [...this.state.hogsList]

      switch (this.state.filter.sortBy) {
         case 'name':
            hogArray.sort((a, b ) => a.name.localeCompare(b.name))
            break;
         case 'weight':
            hogArray.sort((a, b) => a[weight] - b[weight] )
            break;  
         default:
            hogArray = hogArray
            break;
      }
      
      if (this.state.filter.showGreased) {
         hogArray = hogArray.filter(hog => hog.greased === true)
      }
      return hogArray
   }

   onChangeSortBy = (e) => {
      console.log(e.target.dataset.sort);
      this.setState({ 
         filter: {
            ...this.state.filter,
            sortBy: e.target.dataset.sort
         }
      });
   }

   render() { 
      return (
         <div>
            <Filter
               onToggleShowGreased={this.onToggleShowGreased}
               showGreased={this.state.filter.showGreased}
               onChangeSortBy={this.onChangeSortBy}
            />

            <div className='ui grid four column'>
               {this.getHogsToShow().map(hogObj =>
                  <Hog
                     hogData={hogObj}
                     key={hogObj.name}
                  />)}
            </div>
         </div>
         
      );
   }
}
 
export default HogsContainer
