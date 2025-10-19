import React from 'react';
import '../assets/styles/Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

interface ContactProps {
  mode: 'light' | 'dark';
}

const Contact: React.FC<ContactProps> = ({ mode }) => {
  const email = "gumaroua@gmail.com";
  const phone = "+212 656761829";

  return (
    <div id="contact" className={mode}>
      <div className="items-container">
        <div className={`contact_wrapper ${mode}`}>
          <h1>Contact me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>

          <div className="contact-row">
  <div className="contact-item">
    <FontAwesomeIcon icon={faEnvelope} style={{ color: '#8000ff' }} />
    <a href={`mailto:${email}`} className="contact-text">{email}</a>
  </div>
  <div className="contact-item">
    <FontAwesomeIcon icon={faPhone} style={{ color: '#8000ff' }} />
    <a href={`tel:${phone}`} className="contact-text">{phone}</a>
  </div>
</div>


        </div>
      </div>
    </div>
  );
};

export default Contact;
