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
      isSectionVisible: false,
      timeout: false,
      sectionTimeout: false,
      section: '',
      loading: 'is-loading'
    }

  }
  componentDidMount = () => {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' });
    }, 100);
    document.addEventListener('mousedown', this.clickOut);
  }

  componentWillUnmount = () => {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    document.removeEventListener('mousedown', this.clickOut);
  }

  openSection = (section) => {
    this.setState({
      isSectionVisible: !this.isSectionVisible, section
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        sectionTimeout: !this.state.sectionTimeout
      })
    }, 350)
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
