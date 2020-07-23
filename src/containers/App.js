import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    // we want to return a function here
    // onRequestRobots: () => requestRobots(dispatch)
    // same as:
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  // we no longer use constructor because there's no state is being used
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: []
  //   }
  // }

  componentDidMount() {
    this.props.onRequestRobots();
    // we no longer use this because we moved it into actions
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => { return response.json() })
    //   .then(users => { this.setState({ robots: users }) });
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
            <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
  }
}

// connect() is a high order function
// function that returns another function
export default connect(mapStateToProps, mapDispatchToProps)(App);