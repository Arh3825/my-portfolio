import React, {useState, useEffect} from "react";
import './About.css';

const About = () => {
  const [text, setText] = useState("");

  useEffect(() => {
      fetch("/Intro.txt")
      .then((response => response.text()))
      .then((data) => setText(data))
      .catch((error) => console.error("Error loading text file: ", error));
    }, []);

  return(
    <div className="text-wrap">
      <img className="avatar" src="https://media.licdn.com/dms/image/v2/C5603AQF9ucRjPrfxDg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1582140722441?e=1744848000&v=beta&t=EV7v95qO_0QH5ltpDJvkK2FWIt-08itIJ5yQWB7zT9s" alt="ProfilePic"/>
      <div className="text-container">
            <div className="head"> A little Intro! </div>
            <p className="text-content">{text}</p>
      </div>
    </div>
  )
}

export default About;
