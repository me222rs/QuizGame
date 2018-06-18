"use strict";
//Modules
import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
// Components
import CurrentVisitorCounter from './CurrentVisitorCounter';
import Menu from './Menu';
import QuizForm from './QuizForm';
// Other
import constants from '../store/constants';
import store from '../store/index';
import {getQuestionsFromDB} from '../api';

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

      <form onSubmit={props.start}>
        <p>Vilket landskap bor du i?</p>
        <input type="text" name="region" onChange={props.regionChange}/>
        <p>Ålder?</p>
        <input type="text" name="age" onChange={props.ageChange}/>
        <input type="submit" value="Start" />
      </form>

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
    age: state.age,
    region: state.region
  };
}

function mapDispatchToProps(dispatch){
  return {
    start: (evt) => {
      evt.preventDefault();
      axios.get("http://localhost:8000/getAllQuestions")
        .then((response) => {
          dispatch({ type: constants.START, start: true, data: response.data, })
        }).catch((err) => {
          dispatch({type: Actions.FETCH_DATA_ERROR, payload: err})
        })
    },
    regionChange: (evt) => {
      const action = {type: constants.REGION_CHANGE, region: evt.target.value};
      dispatch(action);
    },
    ageChange: (evt) => {
      const action = {type: constants.AGE_CHANGE, age: evt.target.value};
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Startmenu);
