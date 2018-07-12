var mongoose = require('mongoose');
var schedule = require('node-schedule');
var Answer = require('../models/AnswerModel');

var data = [];

//Updates the stats when server starts
var getInitialStats = false;
if(getInitialStats === false){
  getInitialStats = true;
  Answer.find({}, function(err, answers) {
    if (err) throw err;

    data = answers;
  });
}

//Update the statistics once a day
var j = schedule.scheduleJob('00 * * * * *', function(){
  console.log('Uppdaterar statistik...');
  Answer.find({}, function(err, answers) {
    if (err) throw err;

    data = answers;
  });
});

var getData = function(){
  return data;
}

module.exports = {getData: getData};
