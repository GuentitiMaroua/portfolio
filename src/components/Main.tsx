import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import myPhoto from "../assets/images/maroua.jpg";
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div
  style={{
    width: "150px",          // size of the circle
    height: "150px",
    borderRadius: "50%",     // makes it round
    overflow: "hidden",      // hides anything outside the circle
    border: "3px solid #f6f6f6ff",// optional white border
    boxShadow: "0 0 10px rgba(0,0,0,0.2)", // soft shadow
  }}
>
  <img
    src={myPhoto}
    alt="Maroua Guentiti"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",    // keeps proportions
    }}
  />
</div>

        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/GuentitiMaroua" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/maroua-guentiti-8b8871270" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1> Maroua Guentiti</h1>
          <p>Full-Stack Developer | Software Engineering Student</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/GuentitiMaroua" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/maroua-guentiti-8b8871270" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;