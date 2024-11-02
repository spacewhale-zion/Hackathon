import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

function MyNavbar({ notes, previousYearQuestions, projects, auth }) {
  const navigate = useNavigate(); 

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [loggedButton, setLoggedButton] = useState('Login');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const currentPath = window.location.pathname;

    if (token) {
      setLoggedButton('Logout');
    } else if (currentPath === '/login') {
      setLoggedButton('Sign Up');
    } else if (currentPath === '/signup') {
      setLoggedButton('Login');
    }
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      const results = performSearch(searchQuery);
      setSearchResults(results);
    }
  };

  const performSearch = (query) => {
    const filteredNotes = notes
      .filter(note => note.title && note.title.toLowerCase().includes(query.toLowerCase()))
      .map(note => ({ ...note, type: 'Note' }));

    const filteredProjects = projects
      .filter(project => project.title && project.title.toLowerCase().includes(query.toLowerCase()))
      .map(project => ({ ...project, type: 'Project' }));

    const filteredPreviousYearQuestions = previousYearQuestions
      .filter(question => question.title && question.title.toLowerCase().includes(query.toLowerCase()))
      .map(question => ({ ...question, type: 'Previous Year Question' }));

    return [...filteredNotes, ...filteredProjects, ...filteredPreviousYearQuestions];
  };

  const handleButtonClick = () => {
    if (loggedButton === 'Logout') {
      localStorage.removeItem('token');
      setLoggedButton('Login');
      navigate('/');
    } else if (loggedButton === 'Login') {
      navigate('/login');
    } else if (loggedButton === 'Sign Up') {
      navigate('/signup');
    } 
  };

  const handleHomeClick = () => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/home'); // If logged in, navigate to Home
    } else {
      navigate('/login'); // If not logged in, redirect to Login
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-brand" onClick={() => navigate('/')}>
          <img src="../../../public/Assests/LOGO.png" alt="Logo" />
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search projects, exams, or notes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleSearch}
          />
          {searchResults.length > 0 && (
            <div className="search-results">
              <h4>Search Results:</h4>
              <ul>
                {searchResults.map(result => (
                  <li key={result.id}>
                    {result.title} - <em>{result.type}</em>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="navbar-links">
        <a onClick={handleHomeClick} style={{ cursor: 'pointer' }}>Home</a>
        <div className="dropdown">
          <button onClick={toggleDropdown} className="dropbtn">
            Resources <span className="dropdown-arrow">▼</span>
          </button>
          {dropdownOpen && (
            <div className="dropdown-content">
              <a href="#projects">Student Projects</a>
              <a href="#exams">Previous Year Exams</a>
              <a href="#notes">Notes Sharing</a>
            </div>
          )}
        </div>
        <a href="#counselor">Expert Support</a>
        <button onClick={handleButtonClick} className="login-button">
          {loggedButton}
        </button>
      </div>
    </nav>
  );
}

export default MyNavbar;
