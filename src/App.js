import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';


class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <span>CALCULATOR</span>
        </p>
          <Welcome/>
      </div>
    );
  }
}

export default App;
