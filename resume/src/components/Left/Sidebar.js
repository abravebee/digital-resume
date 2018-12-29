/* == Dependencies == */
import React, { Component } from 'react';
/* == Components == */
import MainNav from './MainNav';
import Contact from './Contact';
/* == Style == */
import './Sidebar.css'

class Sidebar extends Component {
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
      <div className={`Sidebar ${this.props.timeout ? 'fade' : ''}`} id="sidebar">
        <MainNav 
          openSection={this.props.openSection} 
          timeout={this.props.timeout}
        />
        <Contact />
      </div>
    );
  }
}

export default Sidebar;
