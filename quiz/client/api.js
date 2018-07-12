"use strict";
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');
import axios from 'axios';
import state from './store';

function currentVisitors(cb) {
  socket.on('counter', visitors => cb(null, visitors));
  socket.emit('currentVisitors', 1000);
}

function getQuestionsFromDB(){
  axios.get('http://localhost:8000/getAllQuestions')
  .then(function (response) {
    console.log(response);
    return response;
  })
  .catch(function (error) {
    console.log(error);
  });
}

function getStatisticsFromDB(){
  axios.get('http://localhost:8000/getStatistics')
  .then(function (response) {
    console.log("getStatisticsFromDB(): "+response.data[0].answer);
    return response;
  })
  .catch(function (error) {
    console.log(error);
  });
}

function saveAnswerToDB(questionID, answer, age, region){
  axios.post('http://localhost:8000/saveAnswerToDB', {
    questionID: questionID,
    answer: answer,
    age: age,
    region: region
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
export { currentVisitors, getQuestionsFromDB, saveAnswerToDB, getStatisticsFromDB }
