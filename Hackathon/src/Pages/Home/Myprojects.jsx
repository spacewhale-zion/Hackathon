import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import './home.css'; // Import your custom CSS file

function MyProjects(props) {
  // Destructure the props to extract the projects, notes, and previous year papers
  const { projects = [], notes = [], previousYearQuestions = []} = props;

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center myproject">Your <span>Projects</span></h2>

      <div className="row">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card project-card">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body text-center">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="d-flex justify-content-center">
                    <a href="#" className="btn-light">View Project</a>
                  </div>
                </div>
              </div>
            </div>
            
          )) 
        ) : (
          <div className="col-12 text-center">No projects available.</div>
        )}
      </div>

      <h2 className="mb-4 text-center myproject">Your <span>Notes</span></h2>
      <ul className="list-group mb-4">
        {notes.length > 0 ? (
          notes.map((note, index) => (
            <li className="list-group-item" key={index}>
              <a href={note.link} target="_blank" rel="noopener noreferrer">{note.title}</a>
            </li>
          ))
        ) : (
          <li className="list-group-item">No notes available.</li>
        )}
      </ul>

      <h2 className="mb-4 text-center myproject">Previous Year <span>Question Papers</span></h2>
      <ul className="list-group mb-4">
        {previousYearQuestions.length > 0 ? (
          previousYearQuestions.map((paper, index) => (
            <li className="list-group-item" key={index}>
              <a href={paper.link} target="_blank" rel="noopener noreferrer">{paper.title}</a>
            </li>
          ))
        ) : (
          <li className="list-group-item">No previous year papers available.</li>
        )}
      </ul>
    </div>
  );
}

export default MyProjects;
