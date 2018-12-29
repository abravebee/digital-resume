import React, { Component } from 'react';

/* == Style == */

class MainNav extends Component {
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
      <div className="MainNav">
        MainNav.js
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {this.props.openSection('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {this.props.openSection('projects')}}>Projects</a></li>
                <li><a href="javascript:;" onClick={() => {console.log("HEY!!!")}}>HELLO</a></li>
             </ul>
        </nav>
      </div>
    );
  }
}

export default MainNav;
