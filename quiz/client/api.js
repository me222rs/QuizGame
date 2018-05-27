"use strict";
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');
import axios from 'axios';
import state from './store';

function subscribeToTimer(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
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
export { subscribeToTimer, getQuestionsFromDB }
