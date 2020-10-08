import React, {useState} from "react";
import "./About.css";
import CutePic from "../../assets/profilephoto.jpg";

function AboutMore({ title, description }) {
  const [clicked, setClicked] = React.useState(false);
  if(clicked) {
      return (
      <div className = "button-info">
        <p> Academically, I'm interested in the intersection between economics, data science, and global poverty reduction, 
      but pure math is pretty cool too. In my free time, I enjoy singing (poorly), playing tennis (so rarely that
      I wouldn't say it counts), discussing politics, and raving about Avatar: The Last Airbender and—controversial, I know—
      The Legend of Korra.</p>
      </div>
      )
  } else {
      return (
      <div className = "button-info">
          <h3 onClick={() => setClicked(true)}>Click for more on me</h3>
      </div>
      )
  }
}

export default function AboutScreen() {

  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src={CutePic} className="intro-picture" />
        </div>
        <div className="intro-item">
              <h3>My name is Serena Han, and I'm a college student residing in Massachusetts.</h3>
        </div>
        <div className="intro-item">
          <AboutMore
          title="Cool"
          description="Nice"
          ></AboutMore>
        </div>
      </div>
    </div>
  );
}


