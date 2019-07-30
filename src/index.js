import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

// your code goes here
class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul className="navbar">
            <li>
              <Link to="/Resume">About Me</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/Resume" component={Resume} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Projects" component={Projects} />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<Home />, document.getElementById('root'));
