"use strict";
import React from 'react';
import {connect} from 'react-redux';
import constants from '../store/constants';
import Score from './Score';
import CurrentVisitorCounter from './CurrentVisitorCounter';

function QuizForm(props){
  console.log('render',props);

  //Disable the submit button if no option is selected
  let disabledSubmit = false;
  if(props.answer === undefined){
    disabledSubmit = true;
  }
  else{
    disabledSubmit = false;
  }

  if(props.step < props.questions.length){
    return (
      <div>
        <form onSubmit={props.submitAnswer} className="container">
          <p>Fråga {props.step+1}</p><br />
          <p>{props.questions[props.step].question}</p>
          <img src={props.questions[props.step].imageUrl} height="300" width="300"/>
          <ul>
            {props.questions[props.step].options.map((option, index) =>{
              return (
                <li>
                  <input key={index} id={props.questions[props.step].questionID} onChange={props.radioCheck} type="radio" name="option" value={option}/>
                  <label htmlFor={index}>{option}</label>
                </li>
              )
            })}
          </ul>
          <input value="Nästa" type="submit" className="btn btn-default" disabled={disabledSubmit}/>
        </form>
        <Score />
      </div>
    );
  }else{
    return(
      <div className="container">
        <p>Tack för att du spelade!</p>
        <h3>Du fick {props.score} poäng!</h3>
        <button onClick={props.restart}>Spela igen</button>
        <button>Visa Highscore (Placeholder)</button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    questions: state.questions,
    step: state.step,
    answer: state.answer,
    score: state.score
  };
}

function mapDispatchToProps(dispatch){
  return {
    submitAnswer: (evt) => {
      evt.preventDefault();
      const action = {type: constants.NEXT_STEP};
      dispatch(action);
    },
    radioCheck: (evt) => {
      const action = {type: constants.RADIO_CHECK, radioValue: evt.target.value};
      dispatch(action);
    },
    restart: (evt) => {
      const action = {type: constants.RESTART};
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizForm);
