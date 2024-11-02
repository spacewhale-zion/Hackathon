import React,{useEffect} from 'react';
import { FaPhoneAlt, FaTwitter, FaEnvelope,FaFacebook,FaGooglePlus,FaInstagram } from 'react-icons/fa'; // Import icons
import './Topheader.css';

function Topheader() {

 
  return (
    <div className="topheader">
      <div className="left-section">
        <FaPhoneAlt className="icon phone-icon" />
        <span>020-455-5555</span>
        <FaEnvelope className="icon" />
        <FaTwitter className="icon" />
        <FaFacebook className="icon" />
        <FaGooglePlus className="icon" />
        <FaInstagram className="icon" />

      </div>
      <div className="right-side">
        <span>Refund Policies</span>
        <div className="vertical-line"></div> 
        <span>HelpDesk</span>
      </div>
    </div>
  );
}

export default Topheader;
