/* == Dependencies == */
import React, { Component } from 'react';
/* == Components == */
import About from './Sections/About';
import Projects from './Sections/Projects';
import ExperEdu from './Sections/ExperEdu';
/* == Style == */
import './Main.css'

class Main extends Component {
  render() {
    let close = <div className="close" onClick={() => {this.props.closeArticle()}}></div>
    return (
      <div ref={this.props.setWrapperRef} id="main" className={this.props.timeout ? 'Main' : 'inactive'}>
        <section id="about" className={`${this.props.section === 'about' ? 'active' : 'inactive'} ${this.props.sectionTimeout ? 'timeout' : ''}`}>
          <About />
          {close}
        </section>

        <section id="projects" className={`${this.props.section === 'projects' ? 'active' : 'inactive'} ${this.props.sectionTimeout ? 'timeout' : ''}`}>
          <Projects />
          {close}
        </section>

        <section id="experedu" className={`${this.props.section === 'experedu' ? 'active' : 'inactive'} ${this.props.sectionTimeout ? 'timeout' : ''}`}>
          <ExperEdu />
          {close}
        </section>

        </div>
    );
  }
}

export default Main;
