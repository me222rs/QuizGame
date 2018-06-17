"use strict";
import {createStore} from 'redux';
import constants from './constants';
import {getQuestionsFromDB} from '../api';

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
}

const reducer = (state = initialState, action) => {
  console.log("reducer",action);
  switch (action.type){
    case constants.START:
    console.log(getQuestionsFromDB());
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

    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
