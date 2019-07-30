import React, { Component } from 'react';
import './resume.css';
import apple from '../Images/apple.jpg'

class Resume extends Component {
  render() {
    return (
      <div id="AboutMe" className="aboutMe">
        <img style={{ apple }} alt="apple" />
        <h3> About Me:</h3>
        <h2>Jevon Hill</h2>
        <h3>Full Stack Web Developer</h3>
        <ul>
          <li>Graduated at the top of my class in Wyncode Academy</li>
          <li>Won best app on Pitch Night</li>
          <li>Interested in anything Javascript, React, Ruby on Rails</li>
          <li>Always learning and being exposed to new technologies</li>
        </ul>

      </div >
    );
  }
}

export default Resume;
