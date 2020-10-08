import React from "react";
import "./Education.css";

function TimeLineItem(props) {
  return (
    <div 
    className="timeline-item"
    onClick={() => {
      props.setActiveTitle(props.title)
      props.setActiveDate(props.date)
      props.setActiveDescription(props.description)
      }}
    >
      <div className="education-info">
        <h2>{props.title}</h2>
        <h3>{props.date}</h3>
      </div>
    </div>
  );
}

export default function EducationScreen() {
  const [activeTitle, setActiveTitle] = React.useState('Click on a school for details.');
  const [activeDate, setActiveDate] = React.useState('');
  const [activeDescription, setActiveDescription] = React.useState('');

  return (
    <div className="screen-background">
      <div className="education-background">
        <div className="timeline-background">
          <TimeLineItem 
            title="Harvard College"
            date="Aug 2020 – Present"
            description="Prospective Computer Science concentrator with secondary in Economics"
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
            setActiveDate={setActiveDate}>
          </TimeLineItem>
          <TimeLineItem title="Acton-Boxborough Regional High School"
          date="Sep 2016 – May 2020"
          description="Top 1% of graduating class.
          THOLYL Scholarship; Fred L. Robbins Scholarship; Brown Book Award."
          setActiveTitle={setActiveTitle}
          setActiveDescription={setActiveDescription}
          setActiveDate={setActiveDate}>
          </TimeLineItem>
        </div>
        
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
          <p>{activeDate}</p>
          <h4>{activeDescription}</h4>
        </div>
      </div>
    </div>
  );
}