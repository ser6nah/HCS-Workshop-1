import React from "react";
import "./Experience.css";

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
      <div className="experience-info">
        <h3>{props.date}</h3>
        <h2>{props.title}</h2>
      </div>
    </div>
  );
}

export default function ExperienceScreen() {
  const [activeTitle, setActiveTitle] = React.useState('Click on a job title for details.');
  const [activeDate, setActiveDate] = React.useState('');
  const [activeDescription, setActiveDescription] = React.useState('');

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem 
            title="Harvard CS Comper"
            date="Sep 2020 – Present"
            description="Attend regular workshop meetings and events for the competency semester."
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
            setActiveDate={setActiveDate}>
          </TimeLineItem>
          <TimeLineItem title="AP Java Lab Assistant"
          date="Sep 2019 – Mar 2020"
          description="Helped high school juniors and seniors with OOP concepts, problem solving, and test grading.
          Prepared students to take the AP Computer Science A exam in May."
          setActiveTitle={setActiveTitle}
          setActiveDescription={setActiveDescription}
          setActiveDate={setActiveDate}>
          </TimeLineItem>
          <TimeLineItem title="Website Development Intern"
          date="Jul 2019 – Aug 2019"
          description="Updated the National Action Civics Collaborative’s website by working closely with a HGSE graduate student and several leaders of the founding organizations."
          setActiveTitle={setActiveTitle}
          setActiveDescription={setActiveDescription}
          setActiveDate={setActiveDate}>
          </TimeLineItem>
          <TimeLineItem title="Working on the rest :')"
          date="Present – Future"
          description="I don't have much coding experience, but there is much to learn!"
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