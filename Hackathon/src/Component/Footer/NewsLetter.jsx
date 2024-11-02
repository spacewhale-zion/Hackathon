import React from 'react';
import './Footer.css'; // Make sure to create a NewsLetter.css file for styling

function NewsLetter() {
  return (
    <div className="newsletter-container">
      <h1>Join Our Newsletter</h1>
      <label>
        Phone Number <span style={{ color: 'red' }}>*</span>
      </label>
      <div className="newsletter-inputs">
        <select name="Country" className="newsletter-select">
          <option value="" disabled selected>IND</option>
          <option value="US">United States</option>
          <option value="IN">India</option>
          <option value="UK">United Kingdom</option>
          <option value="CA">Canada</option>
        </select>
        <select name="ISD" className="newsletter-select">
          <option value="" disabled selected>+1</option>
          <option value="+1">+1 (US/Canada)</option>
          <option value="+91">+91 (India)</option>
          <option value="+44">+44 (UK)</option>
          <option value="+61">+61 (Australia)</option>
        </select>
        <input
        name="Phone No."
        id="phone-number"
        
        placeholder="Enter your phone number"
        className="newsletter-input"
      ></input>
      </div>
   
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil, quos corrupti officia nesciunt repellendus ipsum dignissimos animi illo unde?
      </p>
      <button className="newsletter-button">Join Newsletter</button>
    </div>
  );
}

export default NewsLetter;
