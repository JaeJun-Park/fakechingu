import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      searchfield: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((_users) => this.setState({ users: _users }))
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { users, searchfield } = this.state
    const filteredRobots = users.filter((user) => {
      return user.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return !users.length ? (
      <h1 className="tc">Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">pseudo friends</h1>
        <SearchBox searchChange={this.onSearchChange}></SearchBox>
        <CardList users={filteredRobots}></CardList>
      </div>
    )
  }
}

export default App
