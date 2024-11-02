import React from 'react';
import './Footer.css'; // Ensure you have this CSS file for styling

function Copyright() {
  return (
    <div className="copyright-container">
      <span className="copyright-text">
        © Copyrights 2024 <span className="copyright-highlight"> Innovations</span>  Designed By <span className="copyright-highlight">Team SpaceWhales</span> . All rights reserved.
      </span>
      <div className="social-icons">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="social-icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="social-icon" />
        </a>
      </div>
    </div>
  );
}

export default Copyright;
