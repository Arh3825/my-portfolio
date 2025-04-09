import React from "react";
import headshot from './headshot.png'
import './Welcome.css';

const Welcome = () => {
  return(
    <div className="welcome-wrapper">
      <header>
        <h1 className="welcome"> Alison </h1>
      </header>
      <img src={headshot} alt="My Headshot" className="avatar" />
      <div className="leftText">
        <p>Hello my name is Ali!</p>
      </div>
      <div className="rightText">
        <p>A creative developer passionate about learning!<br />
          ──────────<br />
          I created this website to showcase what I have learned about front end development!</p>
      </div>
    </div>
  );
};

export default Welcome;
