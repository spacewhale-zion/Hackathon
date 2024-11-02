import React from 'react';
import './Dashboard.css';

// Card component for individual assignments
const AssignmentCard = ({ title, dueDate, image }) => (
  <li className="main__card">
    <div className="main__card-image-container">
      <img src={image} alt="" className="main__card-image" />
    </div>
    <h3 className="main__card-heading">{title}</h3>
    <p className="main__card-heading-sub">Due: {dueDate}</p>
  </li>
);

// Utility function to capitalize the first letter of a string
const capitalizeFirstLetter = (string) => {
  if (!string) return 'N/A'; // Return 'N/A' if string is empty or undefined
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const capitalizeAllLetter = (string) => {
  if (!string) return 'N/A'; // Return 'N/A' if string is empty or undefined
  return string.toUpperCase() ;
};

// Main Dashboard Component
const StudentDashboard = ({ notes, previousYearQuestions, auth }) => {
  const assignments = [
    { title: "Mathematics Project", dueDate: "Nov 15", image: "https://via.placeholder.com/220x140" },
    { title: "Science Report", dueDate: "Nov 20", image: "https://via.placeholder.com/220x140" },
    { title: "History Presentation", dueDate: "Nov 25", image: "https://via.placeholder.com/220x140" }
  ];

  return (
    <div className="dash">
      <div className="body">
        <main className="main">

          {/* Column 1 */}
          <div className="main__col-1">
            <div>
              <h2 className="main__heading">
                <span style={{ background: 'linear-gradient(to bottom, hsl(247, 88%, 70%), hsl(282, 82%, 51%))', boxShadow: '0 2px 12px hsla(247, 88%, 70%, .3)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#fff">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </span>
                Student Dashboard
              </h2>
              <p className="main__desc">Welcome to your student dashboard. Here you can track your projects, notes, and exam papers.</p>
            </div>

            {/* Student Statistics */}
            <div className="main__list-heading-wrap">
              <h2 className="main__list-heading ss-heading">Student Statistics</h2>
            </div>

            <ul className="main__list">
              <li className="main__list-item">
                <div className="main__list-content-wrap">
                  <p className="main__list-content">Total Projects Submitted: <strong>{assignments.length}</strong></p>
                </div>
              </li>
              <li className="main__list-item">
                <div className="main__list-content-wrap">
                  <p className="main__list-content">Notes Submitted: <strong>{notes.length}</strong></p>
                </div>
              </li>
              <li className="main__content-item">
                <p className="main__list-content">Previous Exam Papers Submitted: <strong>{previousYearQuestions.length}</strong></p>
              </li>
            </ul>
          </div>

          {/* Column 2: Student Details Section */}
          <div className="main__col-2">
            <div className="main__list-heading-wrap">
              <h2 className="main__list-heading">Student Details</h2>
            </div>

            <ul className="main__list">
              <li className="main__list-item">
                <p className="main__list-content">Name: <strong>{capitalizeFirstLetter(auth ? auth.name : '')}</strong></p>
              </li>
              <li className="main__list-item">
                <p className="main__list-content">Email: <strong>{auth ? auth.email : 'N/A'}</strong></p>
              </li>
              <li className="main__list-item">
                <p className="main__list-content">Course: <strong>{capitalizeAllLetter(auth ? auth.areaOfStudy : 'N/A')}</strong></p>
              </li>
              <li className="main__list-item">
                <p className="main__list-content">University: <strong>{capitalizeAllLetter(auth ? auth.university : 'N/A')}</strong></p>
              </li>
            </ul>
          </div>

        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
