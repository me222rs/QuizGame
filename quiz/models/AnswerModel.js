var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema for saving a user score
var answerSchema = new Schema({
  answerID: Number,
  questionID: String,
  answer: String,
  age: Number,
  region: String
});

module.exports = mongoose.model('Answer', answerSchema);
