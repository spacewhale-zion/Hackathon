import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import './home.css'; // Import your custom CSS file
import axios from 'axios'; // Import Axios for making HTTP requests

function MyProjects() {
  const [showModal, setShowModal] = useState(false);
  const [currentType, setCurrentType] = useState(''); // 'project', 'note', or 'question'
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    link: '',
    imageUrl: '',
    technologies: '',
    year: '',
    course: '',
    semester: '',
    file: null, // Added for file uploads
  });

  const handleShowModal = (type) => {
    setCurrentType(type);
    setShowModal(true);
    setFormData({
      title: '',
      description: '',
      link: '',
      imageUrl: '',
      technologies: '',
      year: '',
      course: '',
      semester: '',
      file: null, // Reset file when opening the modal
    }); // Reset form data when opening the modal
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({ ...formData, [name]: type === 'file' ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found. Please log in again.');
      return; // Early exit if there's no token
    }

    const endpoint = currentType === 'project'
      ? 'http://localhost:5000/api/project/upload'
      : currentType === 'note'
      ? 'http://localhost:5000/api/note/upload'
      : 'http://localhost:5000/api/previous/add'; // New endpoint for question papers

    const formDataToSubmit = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSubmit.append(key, formData[key]);
    });
  console.log(formDataToSubmit);
    try {
      const response = await axios.post(endpoint, formDataToSubmit, {
        headers: {
          'auth-token': `${token}`,
        },
      });
      console.log(`Adding ${currentType}:`, response.data);
      handleCloseModal();
    } catch (error) {
      console.error('Error adding data:', error.response?.data || error.message);
    }
  };

  return (
    <div className="container mt-4">
      <div className="text-center mb-4">
        <button className="btn btn-primary mx-2" onClick={() => handleShowModal('project')}>Add Project</button>
        <button className="btn btn-secondary mx-2" onClick={() => handleShowModal('note')}>Add Note</button>
        <button className="btn btn-info mx-2" onClick={() => handleShowModal('question')}>Add Previous Year Question</button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal show" style={{ display: 'block' }}>
          <div className="modal-dialog modal-lg" style={{ margin: 'auto' }}>
            <div className="modal-content">
              <div className="modal-header" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h5 className="modal-title">{currentType === 'project' ? 'Add Project' : currentType === 'note' ? 'Add Note' : 'Add Previous Year Question'}</h5>
                <button type="button" className="close" onClick={handleCloseModal}>
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      value={formData.title}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {currentType === 'project' && (
                    <>
                      <div className="form-group">
                        <label>Description</label>
                        <textarea
                          name="description"
                          className="form-control"
                          value={formData.description}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label>Image URL</label>
                        <input
                          type="text"
                          name="imageUrl"
                          className="form-control"
                          value={formData.imageUrl}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </>
                  )}
                  {currentType === 'note' && (
                    <div className="form-group">
                      <label>Link</label>
                      <input
                        type="text"
                        name="link"
                        className="form-control"
                        value={formData.link}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  )}
                  {currentType === 'question' && (
                    <>
                      <div className="form-group">
                        <label>Year</label>
                        <input
                          type="text"
                          name="year"
                          className="form-control"
                          value={formData.year}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Course</label>
                        <input
                          type="text"
                          name="course"
                          className="form-control"
                          value={formData.course}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Semester</label>
                        <input
                          type="number"
                          name="semester"
                          className="form-control"
                          value={formData.semester}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Link to Question Paper</label>
                        <input
                          type="text"
                          name="file"
                          className="form-control"
                          value={formData.link}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    
                    </>
                  )}
                  <div className="text-center mt-3 add-project"> {/* Centering buttons */}
                    <button type="submit" className="btn btn-primary mr-2">Add</button>
                    <button type="button" className="btn btn-secondary mr-2" onClick={handleCloseModal}>Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Existing projects, notes, and question papers sections would go here */}
    </div>
  );
}

export default MyProjects;
