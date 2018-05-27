var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Question = require('../../models/QuestionModel');

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

//This qets 10 random questions from the database
router.get('/get10RandomQuestions',function(req, res) {

});

//This gets one random question from the database
router.get('/getQuestion',function(req, res) {
  res.send('Gets one question.');
});

//This sends the answer to the database and responds with statistics data and if it was correct
router.post('/answerQuestion',function(req, res) {
  res.send('Sends the answer.');
});

router.get('/getStatistics',function(req, res) {
  res.send('Gets all the statistics.');
});


module.exports = router;
