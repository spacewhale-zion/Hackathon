import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Copyright from './Component/Footer/Copyright';
import Home from './Pages/Home/Home';
import Login from './Component/Login/Login.jsx';
import SignUp from './Component/SignUp/SignUp.jsx';
import { useEffect, useState } from 'react';
import Landing from './Pages/Landing/Landing.jsx';

function App() {
  const [notes, setNotes] = useState([]);
  
  const [auth, setAuth] = useState(null);
  const [previousYearQuestions, setPreviousYearQuestions] = useState([]);
  const [projects, setProjects] = useState([]); // State for projects

  useEffect(() => {
    const token = localStorage.getItem('token');

    // Fetch authentication status
    if (token) {
      fetch('http://localhost:5000/api/auth/me', {
        headers: {
          'auth-token': `${token}`
        }
      })
      .then(response => response.json())
      .then(data => {
        setAuth(data);

        // Fetch notes and projects after authentication
        fetchNotes(data.email, token);
        fetchProjects(data.email); // Fetch projects
      })
      .catch(err => console.error('Failed to fetch auth status:', err));
    }

    // Fetch previous year questions
    if (token) {
      fetch('http://localhost:5000/api/previous/user', {
        headers: {
          'auth-token': `${token}`
        }
      })
      .then(response => response.json())
      .then(data => {
        setPreviousYearQuestions(data);
      })
      .catch(err => console.error('Failed to fetch previous year questions:', err));
    }
  }, []);

  // Function to fetch notes
  const fetchNotes = (email, token) => {
    fetch(`http://localhost:5000/api/note/getNotes?email=${email}`)
    .then(response => response.json())
    .then(data => {
      setNotes(data);
    })
    .catch(err => console.error('Failed to fetch notes:', err));
  };

  // Function to fetch projects
  const fetchProjects = (email, token) => {
    fetch(`http://localhost:5000/api/project/getProject?email=${email}`, {
     
    })
    .then(response => {
      console.log(response); // Log the full response
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setProjects(data);
    })
    .catch(err => {
      console.error('Failed to fetch projects:', err);
    
    });
  };

  return (
    <Router>
      <Navbar notes={notes} previousYearQuestions={previousYearQuestions} projects={projects} auth={auth} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home notes={notes} previousYearQuestions={previousYearQuestions} projects={projects} auth={auth} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
      <Copyright />
    </Router>
  );
}

export default App;
