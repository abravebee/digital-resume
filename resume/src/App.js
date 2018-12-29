


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

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  openSection = (section) => {
    this.setState({
      isSectionVisible: !this.isSectionVisible, section
    }, () => console.log("section", section, "this.state.section", this.state.section))

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 3)

    setTimeout(() => {
      this.setState({
        sectionTimeout: !this.state.sectionTimeout
      })
    }, 5)
  }

  closeSection = () => {
    this.setState({
      sectionTimeout: !this.state.sectionTimeout
    })
    
    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 3)

    setTimeout(() => {
      this.setState({
        isSectionVisible: !this.state.isSectionVisible,
        section: ''
      })
    }, 5)
  }

  clickOut = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isSectionVisible) {
        this.closeSection();
      }
    }
  }

  render() {
    return (
      <div className="App">
      <div className="bg">
      <div className="app-container">
        <Sidebar
        openSection={this.openSection} 
        timeout={this.state.timeout} />
        <Main 
          isSectionVisible={this.state.isSectionVisible}
          timeout={this.state.timeout}
          sectionTimeout={this.state.sectionTimeout}
          section={this.state.section}
          closeSection={this.closeSection}
          setWrapperRef={this.setWrapperRef}
        />
        </div>
      </div>
      </div>
    );
    
  }
}

export default withRouter(App);
