var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Question = require('../../models/QuestionModel');
var Answer = require('../../models/AnswerModel');

//This is the startpage
router.get('/', function(req, res){
  res.render('index')
});

//This qets all questions from the database
router.get('/getAllQuestions',function(req, res) {
  Question.find({}, function(err, questions) {
    if (err) throw err;

    res.send(questions);
  });
});

router.post('/saveAnswerToDB',function(req, res) {
  var answer = Answer({
    questionID: req.body.questionID,
    answer: req.body.answer,
    answerID: 1
  });

  // save the answer
  answer.save(function(err) {
    if (err) throw err;
    console.log('Answer saved!');
  });
});

//This qets 10 random questions from the database
router.get('/get10RandomQuestions',function(req, res) {

});

//This gets one random question from the database
router.get('/getQuestion',function(req, res) {
  res.send('Gets one question.');
});

router.get('/getStatistics',function(req, res) {
  res.send('Gets all the statistics.');
});


module.exports = router;
