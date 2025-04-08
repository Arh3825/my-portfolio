import React, { useState, useEffect } from "react";
import headshot from './headshot.png'
import './Welcome.css';

const Welcome = () => {
  const [Intro, setIntro] = useState("");
    useEffect(() => {
      fetch("/Intro.txt")
        .then((res) => res.text())
        .then((text) => setIntro(text));
    }, []);

  const[leftText, rightText] = Intro.split("---");

  return(
    <div className="about-wrapper">
      <header>
        <h1 className="welcome"> Welcome </h1>
      </header>
      <img src={headshot} alt="My Headshot" className="avatar" />
      <div className="leftText">{leftText}</div>
      <div className="rightText">{rightText}</div>
    </div>
  );
};

export default Welcome;
