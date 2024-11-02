import React from 'react';
import BookYourAppointment from './BookYourAppointment';
import '../HeroSection/hero.css';

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <p className="hero-counselors-text1">Empower Your Academic Journey</p>
        <h1>Welcome to the <span>Integrated Platform</span> for Students</h1>
        <p>
          Discover a centralized hub for showcasing student projects, accessing previous year exams, and sharing valuable notes across universities. 
          Our platform fosters peer learning, encourages innovation, and facilitates cross-functional research, enhancing your overall academic experience.
        </p>

        <div className="hero-buttons">
          <button className='connected'>Join Us Now</button>
          <button className='Learn'>Learn More</button>
        </div>
        <p className="hero-counselors-text2">
          Collaborate, innovate, and excel together with our vibrant student community!
        </p>
      </div>
      <div className="hero-appointment">
        <BookYourAppointment />
      </div>
    </div>
  );
}

export default HeroSection;
