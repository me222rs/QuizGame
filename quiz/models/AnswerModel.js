var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema for saving a user score
var questionSchema = new Schema({
  answerID: Number,
  questionID: String,
  answerCorrect: Boolean,
  age: Number
});

module.exports = mongoose.model('Question', questionSchema);
