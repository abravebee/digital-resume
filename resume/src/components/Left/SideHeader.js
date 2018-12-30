/* == Dependencies == */
import React, { Component } from 'react';
/* == Style == */

class SidebarHeader extends Component {
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
      <div className="SidebarHeader">
        <h1>Hello.</h1>
        <h2>I'm Casey Baker, Full Stack Software Engineer</h2>
      </div>
    );
  }
}

export default SidebarHeader;
