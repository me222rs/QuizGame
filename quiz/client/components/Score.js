"use strict";
import React from 'react';
import {connect} from 'react-redux';
import constants from '../store/constants';

function Score(props){
  console.log('render',props);
  return (
    <div>
      <p>Poäng: {props.score}</p>
      {props.playerWasCorrect}
    </div>
  );
}

function mapStateToProps(state){
  return {
    score: state.score,
    playerWasCorrect: state.playerWasCorrect
  };
}

function mapDispatchToProps(dispatch){
  return {
    addPoints: (evt) => {
      const action = {type: constants.ADD_POINTS, points: 5 };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Score);
