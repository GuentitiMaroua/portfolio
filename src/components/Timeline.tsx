import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="experience">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {/* End-of-Studies Internship - Saphir Innovation */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work skill-animated"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="April 2024 – June 2024"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Development of a web application for geospatial visualization and user request analysis</h3>
            <h4 className="vertical-timeline-element-subtitle">Saphir Innovation - Safi, Morocco</h4>
            <p>End-of-Studies Internship</p>
          </VerticalTimelineElement>

          {/* End-of-Studies Internship - Marsa Maroc */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work skill-animated"
            date="April 2023 – June 2023"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Development of a web application for expense management</h3>
            <h4 className="vertical-timeline-element-subtitle">Marsa Maroc - Safi, Morocco</h4>
            <p>End-of-Studies Internship</p>
          </VerticalTimelineElement>

          {/* Final Year Project - TABIBI */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work skill-animated"
            date="June 2023"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Development of a web and mobile application 'TABIBI' for emergency management</h3>
            <h4 className="vertical-timeline-element-subtitle">Higher School of Technology - Safi, Morocco</h4>
            <p>Final Year Project</p>
          </VerticalTimelineElement>

          {/* Initiation Internship - Pharmacy Achbar */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work skill-animated"
            date="June 2022 – July 2022"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Development of a web application for pharmacy management</h3>
            <h4 className="vertical-timeline-element-subtitle">Pharmacy Achbar - Safi, Morocco</h4>
            <p>Initiation Internship</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
