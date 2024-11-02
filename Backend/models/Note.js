// models/Note.js
const mongoose = require('mongoose');
const noteSchema = new mongoose.Schema({
  title: String,
  file: String, // URL of the uploaded PDF file
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the user who uploaded
});

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;
