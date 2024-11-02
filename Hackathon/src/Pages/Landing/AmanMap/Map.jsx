import React from 'react';
import './map.css'; // Import your CSS file

const ContactSection = () => {
  return (
    <div className="aman1-contact-section">
      <div className="aman1-left-contact-section">
        <h2><span>Connecting Students Worldwide</span>: A Global Community for Learning and Collaboration</h2>
        <p>
          In today's academic landscape, students face the challenge of limited access to essential resources. 
          Our integrated platform addresses this gap by providing a centralized space for students from various 
          universities to share projects, previous year exams, and study notes, fostering collaboration and 
          enhancing learning experiences through community-driven knowledge sharing.
        </p>
      </div>
      <div className="aman1-right-contact-section">
        <img src="./map.jpg" alt="Illustration" />
      </div>
    </div>
  );
};

export default ContactSection;
