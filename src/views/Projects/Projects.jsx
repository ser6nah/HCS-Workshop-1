import React from "react";
import Project from "../../components/Project/Project";
import HCS from "../../assets/hcs.png";
import Monkey from "../../assets/monkey.png"

export default function ProjectsScreen() {
  return (
    <div className="screen-background">
      <p></p>
      <Project
        title="HCS Workshop 1"
        source={HCS}>
        link="https://github.com/ser6nah/HCS-Workshop-1"
      </Project>
      <Project 
        title="Bloons Tower Defense"
        source={Monkey}>
        link="https://github.com/ser6nah/bloonstd"
      </Project>
    </div>
  );
}
