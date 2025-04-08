import React from "react";
import headshot from './headshot.png'
import './Welcome.css';

const About = () => {
  return(
    <div className="about-wrapper">
      <header>
        <h1 className="welcome"> Welcome </h1>
      </header>
      <img src={headshot} alt="My Headshot" className="avatar" />
    </div>
  );
};

export default About;
