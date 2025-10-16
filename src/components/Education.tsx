import React from "react";
import '../assets/styles/Education.scss';
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Education() {
  const educationData = [
    {
      date: "October 2024 - Present",
      title: "Master’s Degree in Intelligent Systems Engineering – Software Engineering",
      subtitle: "Faculty of Sciences Ain Chock, Casablanca, Morocco"
    },
    {
      date: "June 2024 ",
      title: "Professional Bachelor's Degree: Computer Systems and Software Engineering",
      subtitle: "Higher School of Technology, Essaouira, Morocco"
    },
    {
      date: "June 2023",
      title: "DUT in Computer Engineering",
      subtitle: "Higher School of Technology, Safi, Morocco"
    },
    {
      date: "June 2021",
      title: "Baccalaureate in Physical Sciences",
      subtitle: "Lycée Qualifiant Ibn Khaldoun, Safi, Morocco"
    }
  ];

  return (
    <div id="education">
      <div className="items-container">
        <h1>Education</h1>
        <VerticalTimeline>
          {educationData.map((edu, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education skill-animated"
              contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
              contentArrowStyle={{ borderRight: '7px solid white' }}
              date={edu.date}
              iconStyle={{ background: '#5000ca', color: 'white' }} // Purple icon
              icon={<FontAwesomeIcon icon={faGraduationCap} />}
              style={{ animationDelay: `${index * 0.2}s` }} // Stagger animation
            >
              <h3 className="vertical-timeline-element-title">{edu.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{edu.subtitle}</h4>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education;
