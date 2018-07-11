var mongoose = require('mongoose');
var schedule = require('node-schedule');
var Answer = require('../models/AnswerModel');


var data = "No data";

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
