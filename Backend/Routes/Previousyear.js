const express = require('express');
const router = express.Router();
const PreviousYearQuestion = require('../models/Previousyear');
const authMiddleware = require('../MiddleWare/middleware');

// Route to add a new previous year question (auth required)
router.post('/add', authMiddleware, async (req, res) => {
  try {
    const { title, year, course, semester, file } = req.body;
    const userId = req.user.id; // Get user ID from the authenticated user
    const newQuestion = new PreviousYearQuestion({
      title,
      year,
      course,
      semester,
      file,
      userId // Automatically set from the authenticated user
    });

    const savedQuestion = await newQuestion.save();
    res.status(201).json({ message: 'Question paper added successfully', question: savedQuestion });
  } catch (error) {
    console.error('Error adding question paper:', error.message);
    res.status(500).json({ message: 'Error adding question paper', error: error.message });
  }
});

// Route to fetch all previous year questions for a specific user (auth required)
router.get('/user', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id; // Get the authenticated user's ID
    const questions = await PreviousYearQuestion.find({ userId }).populate('userId', 'name');
    res.status(200).json(questions);
  } catch (error) {
    console.error('Error fetching question papers for user:', error.message);
    res.status(500).json({ message: 'Error fetching question papers', error: error.message });
  }
});

// Route to fetch all previous year questions
router.get('/all', async (req, res) => {
  try {
    const questions = await PreviousYearQuestion.find().populate('userId', 'name');
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching question papers', error: error.message });
  }
});

module.exports = router;
