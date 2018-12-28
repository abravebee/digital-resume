/* == Dependencies == */
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
/* == Components == */
import Sidebar from './components/Left/Sidebar.js';
import Main from './components/Right/Main.js';
/* == Style == */
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mainNav: 'about'
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
        <Route exact path="/" component={Main}/>
        <Route exact path="/" component={Sidebar}/>
      </div>
     
    );
    
  }
}

export default withRouter(App);
