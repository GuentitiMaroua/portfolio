import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/GuentitiMaroua" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/maroua-guentiti-8b8871270" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      
    </footer>
  );
}

export default Footer;