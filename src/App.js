import React, { Component } from 'react';


import './App.css';
import Welcome from './Welcome';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <p className="App-intro">
          <h3>CALCULATOR</h3>

          <Welcome/>
        </p>
      </div>
    );
  }
}

export default App;
