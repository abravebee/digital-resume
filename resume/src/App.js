/* == Dependencies == */
import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
/* == Components == */
import Sidebar from './components/Left/Sidebar.js';
import Main from './components/Right/Main.js';
/* == Style == */
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }
  componentDidMount = () => {
    //
  }

  componentWillUnmount = () => {

  }

  render() {
    return (
      <div className="App">
        App.js
      <Route exact path="/" component={Sidebar}/>
      <Route exact path="/" component={Main}/>
      </div>
    );
  }
}

export default App;
