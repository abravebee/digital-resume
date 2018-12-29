/* == Dependencies == */
import React, { Component } from 'react';
/* == Components == */
import MainNav from './MainNav';
import SideHeader from './SideHeader';
import Contact from './Contact';
/* == Style == */


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
      <div className="Sidebar">
        Sidebar.js
        <SideHeader />
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
