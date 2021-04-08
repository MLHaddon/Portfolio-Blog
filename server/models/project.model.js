const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is Required."],
    minlength: [6, "Title should be at least six characters in length."]
  },
  description: {
    type: String,
    required: [true, "Description is required."],
    minlength: [6, "Description should be at least six characters in length."]
  },
  urlString: {
    type: String,
    required: [true, "This would be pointless if a url isnt inputted."],
    minlength: [10, "The URL String should be at least 10 characters in length."]
  },
  expLevel: {
    type: Number,
    required: [true, "This is the number of features within the given project."],
    min: [1, "Minimum value is 1."],
    max: [10, "Maximum value is 10."]
  },
  isTopThree: {
    type: Boolean,
    required: [true, "If you are seeing this message. I screwed up."],
    default: false
  }
}, {timestamps: true});
module.exports.Project = mongoose.model('Project', ProjectSchema);