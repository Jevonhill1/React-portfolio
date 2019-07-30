import React, { Component } from 'react';
import '../Components/contact.css';
import Jevon from '../Images/Jevon-pic.jpeg';


class Contact extends Component {
  render() {
    return (
      <div>
        <div id="contact"></div>
        <div className="contact">
          <img src={Jevon} alt="Jevon" rel="noopener noreferrer" />
          <div className="info">
            <h2>Contact Jevon Hill</h2>
            <h3>Phone: 786-237-6767</h3>
            <h3>Email: 1jevonhill@gmail.com</h3>
            <p> Linkedin: https://www.linkedin.com/in/jevon-hill-01/</p>
            <p>Github: https://github.com/Jevonhill1</p>
          </div>
        </div>
      </div >);
  }
}

export default Contact;
