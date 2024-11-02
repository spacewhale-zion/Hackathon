// models/Project.js
const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
  image:String,
  title: String,
  description: String,
  link: String, // Link to GitHub or demo
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the user who created the project
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
