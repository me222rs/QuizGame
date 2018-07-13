"use strict";
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import constants from './constants';
import {saveAnswerToDB} from '../api';
import axios from 'axios';
import {getStatisticsFromDB} from '../api';

const initialState ={
  questions: [],
  step: 0,
  answers: [],
  answer: undefined,
  started: false,
  score: 0,
  correctAnswer: undefined,
  playerWasCorrect: false,
  showAnswer: false,
  age: 0,
  region: "",
  stats: []
}

const reducer = (state = initialState, action) => {
  console.log("reducer",action);
  switch (action.type){
    case constants.START:
    return Object.assign({}, state, {
      questions: action.data,
      started: action.start,
      correctAnswer: action.data[0].correctAnswer
    });

    case constants.NEXT_STEP:
    const copyOfItems = state.answers;
    copyOfItems.push(state.answer);
    console.log(state.answers);
    console.log("correct",state.questions[state.step].correctAnswer);
    let points = 0;
    let wasCorrect = undefined;
    if(state.answer === state.questions[state.step].correctAnswer){
      points = 5;
      wasCorrect = "Rätt";
    }else{
      wasCorrect = "Fel";
    }

    saveAnswerToDB(state.questions[state.step].questionID, state.answer, state.age, state.region);

    return Object.assign({}, state, {
      step: state.step+1,
      answers: copyOfItems,
      correctAnswer: state.questions[state.step].correctAnswer,
      playerWasCorrect: wasCorrect,
      score: state.score + points
    });

    case constants.ANSWER:
    return Object.assign({}, state, {
      showAnswer: true
    });

    case constants.RADIO_CHECK:
    return Object.assign({}, state, {
      answer: action.radioValue
    });

    case constants.GET_STATS:
    return Object.assign({}, state, {
      stats: action.data
    });

    case constants.ADD_POINTS:
    return Object.assign({}, state, {
      answer: action.radioValue
    });

    case constants.RESTART:
    return Object.assign({}, state, {
      questions: [],
      step: 0,
      answers: [],
      answer: undefined,
      started: false,
      score: 0,
      correctAnswer: undefined,
      playerWasCorrect: false
    });

    case constants.AGE_CHANGE:
    return Object.assign({}, state, {
      age: action.age
    });

    case constants.REGION_CHANGE:
    return Object.assign({}, state, {
      region: action.region
    });

    default:
    return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
