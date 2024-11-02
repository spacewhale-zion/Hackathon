import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import '../HeroSection/hero.css'; // Import CSS

function BookYourAppointment() {
  return (
    <Card className="appointment-card">
      <div className="appointment-body">
        <Card.Body>
          <Card.Title>Book Your Appointment</Card.Title>
          <Card.Text className="card-text1">
            Schedule a session with our expert counselors to discuss your academic journey and project ideas. Complete the form below to confirm your appointment.
          </Card.Text>

          {/* Type of Counseling Section */}
          <div className="counselling-section">
            <h5>Type of Assistance</h5>
            <Form.Select aria-label="Select Type of Assistance" className="custom-dropdown">
              <option>Select type of assistance</option>
              <option value="1">Project Guidance</option>
              <option value="2">Exam Preparation</option>
              <option value="3">Note Sharing</option>
              <option value="4">Other</option>
            </Form.Select>
          </div>

          <Card.Text className="card-text2">
            If your specific need isn't listed, please select 'Other' and provide the details.
          </Card.Text>

          {/* Button Positioned to Right */}
          <div className="button-container">
            <Button variant="primary" style={{ background: '#8D3AEA', width: '100px' }}>Proceed</Button>
          </div>
        </Card.Body>
      </div>
      
      {/* Right Side Image */}
      <div className="image-container">
        <Card.Img 
          variant="top" 
          src='./Assets/designCard.png' 
          className="circular-image" 
        />
      </div>
    </Card>
  );
}

export default BookYourAppointment;
