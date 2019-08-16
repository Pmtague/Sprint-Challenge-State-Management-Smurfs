import React, { Component } from "react";

import "./App.css";
import { NewSmurf } from './newSmurf';
import SmurfList from './SmurfList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewSmurf />
        <SmurfList />
      </div>
    );
  }
}

export default App;
