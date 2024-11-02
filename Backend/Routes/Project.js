// routes/project.js
const express = require('express');
const Project = require('../models/Project');
const authenticateToken = require('../MiddleWare/middleware'); // Import your authentication middleware
const router = express.Router();
const User = require('../models/User');


// Upload Project (protected route)
router.post('/upload', authenticateToken, async (req, res) => {
  const { image,title, description, link } = req.body;
  const userId = req.user.id; // Get user ID from the authenticated user

  const newProject = new Project({ image,title, description, link, userId });
  try {
    await newProject.save();
    res.status(201).json({ message: 'Project uploaded successfully' ,newProject});
  } catch (err) {
    res.status(400).json({ message: 'Error uploading project', error: err });
  }
});

// Retrieve Projects (public route)
router.get('/getProject', async (req, res) => {
    const { email } = req.query; // Get the email from the query parameters

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Find projects associated with the user's ID
        const projects = await Project.find({ userId: user._id }).populate('userId', 'name university');
        
        // Check if the user has projects
        if (projects.length === 0) {
            return res.status(404).json({ message: 'No projects found for this user' });
        }

        res.status(200).json(projects);
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json({ message: 'Error retrieving projects', error: err });
    }
});


module.exports = router;
