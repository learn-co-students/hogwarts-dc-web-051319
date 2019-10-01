import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import { Grid, Column, Card } from './Grid'
import hogs from '../porkers_data';

class App extends Component {
  state = {
    allHogs: [],
    shownHogs: [],
    filterGreased: false,
    sortBy: ''
  }

  componentDidMount() {
    this.setState({
      allHogs: hogs,
      shownHogs: hogs
    })
  }

  filterGreased = () => {
    let filterGreased = !this.state.filterGreased
    let shownHogs =
      filterGreased ?
        this.state.allHogs.filter(hog => hog.greased)
        : this.state.allHogs

    this.setState({ filterGreased, shownHogs })
  }

  sortByName = (e) => {
    e.preventDefault()
    this.setState({ sortBy: "name" })
  }

  sortByWeight = (e) => {
    e.preventDefault()
    this.setState({ sortBy: "weight" })
  }

  render() {
    const { shownHogs, sortBy } = this.state
    let sortedHogs
    switch (sortBy) {
      case "name":
        sortedHogs = shownHogs.sort((a, b) => a.name > b.name ? 1 : -1)
        break
      case "weight":
        sortedHogs = shownHogs.sort((a, b) => a.weight > b.weight ? 1 : -1)
        break
      default:
        sortedHogs = shownHogs
    }

    return (
      <div className="App">
        <Nav
          filterGreased={this.filterGreased}
          sortByName={this.sortByName}
          sortByWeight={this.sortByWeight}
        />
        <Grid>
          {sortedHogs.map((hog, index) => (
            <Column key={index}>
              <Card hog={hog} />
            </Column>
          ))}
        </Grid>
      </div>
    )
  }
}

export default App;
