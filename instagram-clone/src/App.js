import React, { Component } from 'react';
import InstaClone from './Pages/InstaClone';
import Login from './Pages/Login';
import Authenticate from './Pages/Authenticate';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <ConditionalRender/>
      </div>
    );
  }
}

const ConditionalRender =  Authenticate(InstaClone)(Login);

export default App;
