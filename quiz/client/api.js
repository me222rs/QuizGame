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

// TODO implementera funktions för att spara resultat i databas
function saveAnswerToDB(questionID, answer){
  axios.post('http://localhost:8000/saveAnswerToDB', {
    questionID: questionID,
    answer: answer
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
export { currentVisitors, getQuestionsFromDB, saveAnswerToDB }
