var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
  questionID: Number,
  question: String,
  correctAnswer: String,
  imageUrl: String,
  options: [{type: String}]
});

module.exports = mongoose.model('Question', questionSchema);
