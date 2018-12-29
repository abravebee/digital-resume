/* == Dependencies == */
import React, { Component } from 'react';
/* == Components == */
import Section from './Section';
/* == Style == */
import './Main.css'

class Main extends Component {
  render() {
    let close = <div className="close" onClick={() => {this.props.closeArticle()}}></div>
    return (
      <div className="Main">
        Main.js
        <Section />

        <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>
        
        <section id="about" className={`${this.props.section === 'about' ? 'active' : 'inactive'} ${this.props.sectionTimeout ? 'timeout' : ''}`}>
          <h2 className="major">About</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
          {close}
        </section>

        <section id="projects" className={`${this.props.section === 'projects' ? 'active' : 'inactive'} ${this.props.sectionTimeout ? 'timeout' : ''}`}>
          <h2 className="major">Projects</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
          {close}
        </section>

        </div>
      </div>
    );
  }
}

export default Main;
