"use strict";
import React from 'react';
import {connect} from 'react-redux';
import constants from '../store/constants';
import store from '../store/index';
import QuizForm from './QuizForm';
import {getQuestionsFromDB} from '../api';
import axios from 'axios';

function welcome(props){
  return(
    <div>
      <h1>Välkommen till quizzet!</h1>
      <h3>Instruktioner</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
      </p>
      <p>Är du redo?</p>
      <button onClick={props.start}>Start</button>
    </div>
  );
}

function Startmenu(props){
  console.log('render',props);
  return (
    <div>
      {(props.started === false) ? welcome(props) : null}
      {(props.started === true) ? <QuizForm /> : null}
    </div>
  );
}

function mapStateToProps(state){
  return {
    started: state.started,
  };
}

function mapDispatchToProps(dispatch){
  return {
    start: (evt) => {
      axios.get("http://localhost:8000/getAllQuestions")
        .then((response) => {
          dispatch({ type: constants.START, start: true, data: response.data })
        }).catch((err) => {
          dispatch({type: Actions.FETCH_DATA_ERROR, payload: err})
        })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Startmenu);
