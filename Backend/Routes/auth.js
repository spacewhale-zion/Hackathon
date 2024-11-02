// routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const fetchuser=require('../MiddleWare/middleware');
const router = express.Router();

const JWT_SECRET = "Aryanisagoo$dboy"; // Keep this secret in an environment variable in production

// Signup route
router.post('/signup', async (req, res) => {
  const { name, email, password, university, areaOfStudy } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      university,
      areaOfStudy,
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
      // Find the user by email
      let user = await User.findOne({ email });
      if (!user) {
          return res.status(400).json({ error: "Invalid credentials" });
      }

      // Compare password
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
          return res.status(400).json({ error: "Invalid credentials" });
      }

      // Create JWT token
      const token = jwt.sign({ user: { id: user._id } }, JWT_SECRET, { expiresIn: '1h' });
    
      // Send response with status 200 and include message and token
      res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
  }
});
router.get('/me', fetchuser, async (req, res) => {
  try {
    // Find the user by ID and exclude the password
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
