/* == Dependencies == */
import React, { Component } from 'react';
/* == Components == */
import SectionHeader from './SectionHeader';
import SectionContent from './SectionContent';
import SectionNav from './SectionNav';
/* == Style == */



class Section extends Component {
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
      <div className="Section">
        Section.js
        <SectionNav />
        <SectionHeader />
        <SectionContent />
      </div>
    );
  }
}

export default Section;
