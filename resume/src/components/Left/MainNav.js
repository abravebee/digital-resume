/* == Dependencies == */
import React, { Component } from 'react';
/* == Style == */
import './MainNav.css'

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
        <nav>
            <ul>
                <li><p onClick={() => {this.props.openSection('about')}}>About</p></li>
                <li><p onClick={() => {this.props.openSection('projects')}}>Projects</p></li>
                <li><p onClick={() => {this.props.openSection('experedu')}}>Experience &amp; Education</p></li>
             </ul>
        </nav>
      </div>
    );
  }
}

export default MainNav;
