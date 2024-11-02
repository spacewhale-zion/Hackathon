import React from 'react';
import './Footer.css'; // Ensure you create a Footer.css file for styling
import NewsLetter from './NewsLetter';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Copyright from './Copyright';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Logo */}
        <div className="footer-logo">
          <img src="../../../public/Assests/Logo.webp" alt="Company Logo" />
        </div>
        
        <div className="footer-quote">
          <blockquote>
           <img src="./Assests/quotemark.png" alt="Quote Mark" />
           Empowering students through collaboration, innovation, and knowledge sharing for a brighter academic future.
          </blockquote>
        </div>
      </div>
      
      {/* Horizontal Line */}
      <hr className="footer-divider" />
      
      {/* Additional Sections */}
      <div className="footer-sections">
        <div className="footer-section-left">
          <div className="footer-section">
            <h4>Connect With Us</h4>
            <p><FaEnvelope /> Email: support@studentplatform.com</p>
            <p><FaPhone /> Phone: +91 123 456 7890</p>
            <p><FaMapMarkerAlt /> Address: University Campus, Your City, India</p>
          </div>
          <div className="footer-section">
            <h4>Explore</h4>
            <p>Home</p>
            <p>About Us</p>
            <p>Resources</p>
            <p>Careers</p>
            <p>Blog</p>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Terms of Use</p>
            <p>Refund Policy</p>
          </div>
        </div>
        
        {/* Newsletter Card */}
        <div className="footer-section newsletter">
          <NewsLetter/>
        </div>
      </div>
    
   
    </footer>
  );
}

export default Footer;
