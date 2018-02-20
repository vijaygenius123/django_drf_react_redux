import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {login , loggedIn } from './util/Auth'
class App extends Component {

  componentDidMount(){
    console.log(login('admin','IMAdmin123!'));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
