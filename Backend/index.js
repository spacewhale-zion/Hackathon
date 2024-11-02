require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());



mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


// Basic route
app.use('/api/auth', require('./routes/auth'));
app.use('/api/project', require('./routes/Project'));
app.use('/api/note', require('./routes/Notes'));
app.use('/api/previous', require('./routes/Previousyear'));



// app.use("/api/notes", require('./routes/notes'));


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
