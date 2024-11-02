import React, { useState } from 'react';
import Select from 'react-select';
import './Contact.css'; // Assuming custom CSS styles
import ContactUs from '../ContactUs/ContactUs.jsx';

// Custom country options with flag images from the web
const countryOptions = [
  { value: 'India', label: <><img src="https://flagcdn.com/in.svg" alt="India" className="flag-icon" /> </> },
  { value: 'USA', label: <><img src="https://flagcdn.com/us.svg" alt="USA" className="flag-icon" /> </> },
  { value: 'Canada', label: <><img src="https://flagcdn.com/ca.svg" alt="Canada" className="flag-icon" /> </> },
  { value: 'UK', label: <><img src="https://flagcdn.com/gb.svg" alt="UK" className="flag-icon" /> </> },
  // Add more country options as needed
];

function ReachOut() {
  const [isdCode, setIsdCode] = useState('+91'); // Default ISD code

  const handleCountryChange = (selectedOption) => {
    const country = selectedOption.value;
    switch (country) {
      case 'India':
        setIsdCode('+91');
        break;
      case 'USA':
        setIsdCode('+1');
        break;
      case 'Canada':
        setIsdCode('+1');
        break;
      case 'UK':
        setIsdCode('+44');
        break;
      default:
        setIsdCode('+91');
    }
  };

  return (
    <div className="card-reachout">
      <div className="card-body">
        <h5 className="card-title">Reach Out to Me</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem tempore molestias repudiandae ipsa voluptate minus. Praesentium at officia maxime maiores aliquid consequatur quas inventore. Excepturi at consectetur dolores. Accusantium, deserunt.
        </p>
        <form className="reachout-form">
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">Name <span style={{ color: 'red' }}>*</span></label>
            <input type="text" placeholder="John Cena eg.." className="form-control" id="Name" />
          </div>
          <div className="mb-3 row">
            <div className="country-container">
              <Select
                options={countryOptions}
                onChange={handleCountryChange}
                className="country-select"
                placeholder="Select Country"
              />
            </div>
            <div className="isd-code-container">
              <input type="text" className="form-control" id="ISDCode" placeholder={isdCode} readOnly />
            </div>
            <div className="phone-container">
              <label htmlFor="Phone" className="form-label">Phone Number <span style={{ color: 'red' }}>*</span></label>
              <input type="tel" placeholder='01112542' className="form-control" id="Phone" />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="Description" className="form-label">Description <span style={{ color: 'red' }}>*</span></label>
            <textarea className="form-control" id="Description" rows="3"></textarea>
          </div>
          <button className="submit-btn">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ReachOut;
