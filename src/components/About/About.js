import React from 'react';
import image1 from "./about1.png";
import image2 from "./about2.png";
import './About.css';

const About = () => {
  return (
    <div className="about-wrapper">
      <h2>About Me!</h2>
      <div className="about-header">
        <p>Software Engineering was not my first choice...</p>
      </div>
      <div className="about-body1">
        <p>I originally began my journey pursuing a degree in Game Design.
        My dream was to work in visual design for video games—combining my artistic abilities to create games that were visually captivating and immersive.
        <br />
        I also deeply enjoyed the competitive side of gaming, which led me to start the Esports Club at High Point University. 
        That passion took me into the esports industry, where I spent a few years trying to break into the emerging scene. Then COVID hit. 
        Like many others, I struggled to find opportunities during that time.
        <br />
        But I couldn’t just sit still—I needed to pivot.
        </p>
        <img src={image1} alt="first" className="image1"></img>
      </div>
      <div className="about-body2">
        <img src={image2} alt="second" className="image2"></img>
        <p>
        That’s when I discovered Software Engineering.
        At first, learning to code was incredibly overwhelming. It felt like solving a puzzle where all the pieces connected in unfamiliar ways.
        I asked for a lot of help—and I mean a lot. But eventually, it started to click. 
        I’m not an expert (yet!), and there are still moments where the unknown feels daunting, but returning to school taught me the most important skill: how to learn and grow as a developer.
        <br />
        My interest in front-end development came later in my coding journey.
        I realized I could return to my creative roots by blending design and art with code.
        Even though my degree didn’t offer front-end-specific courses, I found ways to practice—volunteering for front-end roles during group projects and teaching myself on the side.
        <br />
        And now, as I prepare to graduate in May 2025 with a Software Engineering degree from Mississippi State University, I’m excited to take that next step.
        While I’ve learned a lot about back-end development, my heart is in the front end—and that’s where I hope to build my career.
        </p>
      </div>
    </div>
  );
};

export default About;