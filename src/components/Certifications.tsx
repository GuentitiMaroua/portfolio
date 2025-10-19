import React from 'react';
import '../assets/styles/Certifications.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faNetworkWired, faLanguage } from '@fortawesome/free-solid-svg-icons';

interface Certification {
  title: string;
  organization: string;
  year?: string;
  type: 'network' | 'language' | 'general';
  link?: string;
}

const certifications: Certification[] = [
  {
    title: "CCNAv7: Introduction to Networks",
    organization: "Cisco Networking Academy",
    year: "February 2023",
    type: "network",
    link: "https://www.linkedin.com/in/maroua-guentiti-8b8871270/details/certifications/1760906060523/single-media-viewer/?profileId=ACoAAEJV4swByx3ME8G5RzQmfeZOIvJFHcbphAs"
  },
  {
    title: "English Proficiency Certificate",
    organization: "EF Education First",
    year: "March 2023",
    type: "language",
    link: "https://cert.efset.org/3jgmAh"
  },
  {
    title: "Encryption Certificate ",
    organization: "Internet Society",
    year: "July 2023",
    type: "general",
    link: "https://certificates.isoc.org/6ae1c140-b21c-4a73-83d7-de7ba6b40386#acc.khWENqL3"
  }
];

const getIcon = (type: string) => {
  switch(type) {
    case 'network': return faNetworkWired;
    case 'language': return faLanguage;
    default: return faCertificate;
  }
}

const Certifications: React.FC = () => {
  return (
    <div id="certifications" className="certifications-container">
      <h1>My certifications</h1>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <div className="cert-icon">
              <FontAwesomeIcon icon={getIcon(cert.type)} size="2x" />
            </div>
            <h3>{cert.title}</h3>
            <p>{cert.organization}</p>
            {cert.year && <p>{cert.year}</p>}
            {cert.link && (
              <a href={cert.link} target="_blank" rel="noreferrer" className="view-btn">
                View certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
