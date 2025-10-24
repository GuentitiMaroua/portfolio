import React from "react";
import myPhoto from "../assets/images/maroua.jpg";
import myCV from "../assets/images/Maroua-GUENTITI-EN-CV.pdf"; // Assure-toi que le PDF est à cet endroit
import '../assets/styles/Main.scss';

// Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "3px solid #f6f6f6ff",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          }}
        >
          <img
            src={myPhoto}
            alt="Maroua Guentiti"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/GuentitiMaroua" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/maroua-guentiti-8b8871270" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href={myCV} download>
              <FontAwesomeIcon icon={faFileDownload} size="2x" title="Télécharger mon CV" />
            </a>
          </div>

          <h1>Maroua Guentiti</h1>
          <p>Full-Stack Developer | Software Engineering Student</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/GuentitiMaroua" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/maroua-guentiti-8b8871270" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href={myCV} download>
              <FontAwesomeIcon icon={faFileDownload} size="2x" title="Télécharger mon CV" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
