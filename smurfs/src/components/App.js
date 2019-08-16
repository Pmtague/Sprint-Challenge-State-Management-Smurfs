import React, { Component } from "react";

import "./App.css";
import { NewSmurf } from './newSmurf';
import { SmurfList } from './SmurfList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfList />
        <NewSmurf />
      </div>
    );
  }
}

export default App;
