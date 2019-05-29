import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './AddUser.js';
import UserInfo from './UserInfo.js';


class App extends Component {
  state = {
    users: [],
  };

  // Update state 
  createUser = user => {
    user.numberOfGamesPlayed = 0;
    this.setState(state => ({
      users: [...state.users, user],
    }));
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <AddUser users={this.state.users} onAddUser={this.createUser} />
        <UserInfo users={this.state.users} />
      </div>
    );
  }
}

export default App;
