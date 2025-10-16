import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "Angular",
    "Node.js",
    "Express.js",
    "Flask",
    "Laravel",
    "JEE",
    "Java",
    "C",
    "C++",
    "TypeScript",
    "JavaScript",
    "Leaflet",
    "HTML5",
    "CSS3",
    "Python",
    "PHP",
    "SQL",
    "MySQL",
    "PL/SQL",
    "PostgreSQL",
    "MongoDB",
    "Postman",
    "REST APIs"
];


const labelsSecond = [
    "Git",
    "GitHub",
    "Docker",
    "Linux",
    "Apache Airflow"
    
];

const labelsThird = [
    "UML",
    "Merise",
    "Scrum",
    "Project Management",
    "LaTeX",
    "Microsoft Office",
 
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have developed modern and responsive web applications from scratch using frameworks such as React, Angular, Flask, and Node.js. I handle both frontend and backend logic to deliver seamless and efficient user experiences.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Tools & DevOps</h3>
                    <p>I’m experienced in deploying and containerizing applications with Docker, managing workflows with Airflow, and using version control tools to ensure smooth development and reliable deployment.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faFileAlt} size="3x"/>
                    <h3>Project Management & Documentation</h3>
                    <p>I use these methodologies and tools to plan, model, and manage projects efficiently, while producing clear and professional documentation.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;