import React from 'react'
import Hog from '../screens/Hog'
import FilterButton from '../screens/FilterButton'
import hogs from '../../porkers_data';

class HogsContainer extends React.Component {
    state = {
        greased: false,
        hogs: [...hogs]
    }

    isGreased = () => {
        if (this.state.greased === true) return this.setState({hogs: hogs, greased: false})
        let greasedHogs = this.state.hogs.filter(hog => hog.greased === true)
        this.setState({hogs: greasedHogs, greased: true})
    }

    sortHogs = (e) => {
        console.log(e.target.value);
        
        switch (e.target.value) {
            case "all":
                this.setState({hogs: hogs})
                break;
            case "name":
                let sortedHogs = [...this.state.hogs]
                sortedHogs.sort((a,b) => {
                    if ( a.name < b.name ){
                        return -1;
                      }
                      if ( a.name > b.name ){
                        return 1;
                      }
                         return 0
                })
                this.setState({hogs: sortedHogs})
                break;
            case 'weight': {
                let sortedHogs = [...this.state.hogs]
                sortedHogs.sort((a,b) => {
                    return a.weight - b.weight
                })
                this.setState({hogs: sortedHogs})
                break;
            }
            
        }
    }

    render() {
        return (
            <div>
                <FilterButton sortHogs={this.sortHogs} greased={this.state.greased} isGreased={this.isGreased}/>
                <div className="ui cards">
                    {this.state.hogs.map(hog => {
                        return <Hog hogObj={hog}/>
                    })}
                </div>
            </div>
        ) 
    }
}

export default HogsContainer