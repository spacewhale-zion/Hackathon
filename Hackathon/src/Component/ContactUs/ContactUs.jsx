import React from 'react';
import '../ContactUs/Contact.css';
import ReachOut from './ReachOut';

function ContactUs() {
  return (
    <div className="contact-container">
      <div className="contact-left"> {/* Left */}
      <div className="contact-left"> {/* Left */}
    <h1><span>Get in Touch </span>with Me</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi animi accusamus consectetur, voluptas laudantium molestiae ducimus cupiditate in iusto modi?</p>
    
    <h2>Contact Information</h2>
    <div className="contact-info">
        <div className="info-item">
            <span>Phone Number</span><strong>: 0124896484</strong>
        </div>
        <div className="info-item">
            <span>Email Address</span>: <strong>example@example.com</strong>
        </div>
        <div className="info-item">
            <span>University Address</span>: <strong>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, odio rerum nesciunt magni veniam quidem totam beatae modi consectetur illo!</strong>
        </div>
        <div className="info-item">
            <span>LinkedIn Profile</span>: <strong><a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></strong>
        </div>
        <div className="info-item">
            <span>GitHub Profile</span>: <strong><a href="https://github.com/spacewhale-zion" target="_blank" rel="noopener noreferrer">github.com/spacewhale-zion</a></strong>
        </div>
        <div className="info-item">
            <span>Social Media</span>: <strong><a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">twitter.com/yourprofile</a></strong>
        </div>
    </div>
    <h2>Reach Out to Me!</h2>
    <p>If you have any questions or would like to discuss potential collaborations, feel free to reach out!</p>
</div>

      </div>

      <div className="contact-right"> {/* Right */}
        <div className="image-containerContact">
          <img src="/Assests/FORM.png" alt="Image 1" className="image" />
          <img src="/Assests/FORM1.png" alt="Image 2" className="image" />
          <img src="/Assests/FORM2.png" alt="Image 3" className="image" />

          <ReachOut />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
