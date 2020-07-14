import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
    console.log('constructor');
  }

  componentDidMount() {
    this.setState({ robots: robots });
    console.log('componentDidMount');
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    console.log('render');
    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;