import React, { Component } from 'react';
import './Projects.css';
import mealfly from "../Images/images/mealfly.png";
import job from "../Images/images/git-a-job.png"

class Projects extends Component {
  render() {
    return (
      <div>
        <div id="projects" className="projects"></div>
        <h3 className="mealfly">MealFly-
          <ul>
            <li>A user could create a customizable, secure cookbook by creating an account.</li>
            <li>An admin could create or destroy recipes or categories.</li>
            <li>The app had many data tables based on relationship data.</li>
            <li>The app was written in Ruby on Rails and used React for the Navbar, search component,
              and cookbook button. It also used Jquery for the rating system.</li>
          </ul>
          <a href="https://github.com/wyncode/C33_adrian_jevon_lazaro_yujailec" target="_blank"
            rel="noopener noreferrer">
            https://github.com/wyncode/C33_adrian_jevon_lazaro_yujailec</a></h3>
        <img src={mealfly} alt="mealfly" />
        <h3 className="gitajob">Git a Job-
        <ul>
            <li>React Web App for finding jobs.</li>
            <li>Used 2 API's to find jobs.</li>
          </ul>
          <a href="https://github.com/wyncode/C33_alex_emmanual_loris_jevon" target="_blank"
            rel="noopener noreferrer">
            https://github.com/wyncode/C33_alex_emmanual_loris_jevon</a></h3>
        <img src={job} alt="job" />
      </div>
    );
  }
}

export default Projects;
