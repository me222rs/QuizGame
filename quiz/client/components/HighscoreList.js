"use strict";
import React from 'react';
import {connect} from 'react-redux';
import Menu from './Menu';
import CurrentVisitorCounter from './CurrentVisitorCounter';

function HighscoreList(props){
  console.log('render',props);
  var test = props.stats;
  console.log("stats ---> "+JSON.stringify(test[0]));
  if(props.stats.length !== 0){
    return (
      <div>
        <Menu />
        <div className="container">
          <h1>Highscore</h1>
          <p>{props.stats[0].answer}</p>
          <CurrentVisitorCounter />
        </div>
      </div>
    );
  }
  else{
    return (
      <div>
        <Menu />
        <div className="container">
          <h1>Highscore</h1>
          <p>Väntar på data...</p>
          <CurrentVisitorCounter />
        </div>
      </div>
    );
  }

}

function mapStateToProps(state){
  return {
    stats: state.stats
  };
}

function mapDispatchToProps(dispatch){
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HighscoreList);
