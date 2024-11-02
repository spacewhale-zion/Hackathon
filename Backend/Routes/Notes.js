// routes/note.js
const express = require('express');
const Note = require('../models/Note');
const authenticateToken = require('../MiddleWare/middleware'); // Import your authentication middleware
const router = express.Router();
const User = require('../models/User');

// Upload Note (protected route)
router.post('/upload', authenticateToken, async (req, res) => {
  const { title, file } = req.body;
  const userId = req.user.id; // Get user ID from the authenticated user

  const newNote = new Note({ title, file, userId });
  try {
    await newNote.save();
    res.status(201).json({ message: 'Note uploaded successfully',newNote });
  } catch (err) {
    res.status(400).json({ message: 'Error uploading note', error: err });
  }
});

// Retrieve Notes (public route)
router.get('/getNotes', async (req, res) => {
    const { email } = req.query; // Get the email from the query parameters

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Find projects associated with the user's ID
        const Notes= await Note.find({ userId: user._id }).populate('userId', 'name university');
        
        // Check if the user has projects
        if (Notes.length === 0) {
            return res.status(404).json({ message: 'No Notes found for this user' });
        }

        res.status(200).json(Notes);
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json({ message: 'Error retrieving Notes', error: err });
    }
});

module.exports = router;
