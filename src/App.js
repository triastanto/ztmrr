import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: ''
    }
  }

  // anytime we define function in react, it must be in arrow function form
  // onSearchChange(event) {
  onSearchChange = (event) => {
    // we can't use this syntax to set the state value
    // this.state.searchField = event.target.value;
    this.setState({ searchField: event.target.value });
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    console.log(filteredRobots);
  }

  render() {
    return (
      <div className='tc' >
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}

export default App;