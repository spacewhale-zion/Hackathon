const mongoose = require('mongoose');

const previousYearQuestionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true // To specify the year of the question paper
  },
  file: {
    type: String,
    required: true // URL of the uploaded PDF file
  },
  course: {
    type: String,
    required: true // Course or subject the question paper is related to
  },
  semester: {
    type: Number,
    required: true // Semester for which the question paper is relevant
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true // Reference to the user who uploaded the question paper
  },
  uploadDate: {
    type: Date,
    default: Date.now // Automatically set the date of upload
  }
});

const PreviousYearQuestion = mongoose.model('PreviousYearQuestion', previousYearQuestionSchema);
module.exports = PreviousYearQuestion;
