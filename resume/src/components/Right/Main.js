/* == Dependencies == */
import React, { Component } from 'react';
/* == Components == */
import Section from './Section';
/* == Style == */

class Main extends Component {
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
      <div className="Main">
        Main.js
        <Section />
      </div>
    );
  }
}

export default Main;
