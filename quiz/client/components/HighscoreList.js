"use strict";
import React from 'react';
import {connect} from 'react-redux';
import Menu from './Menu';
import CurrentVisitorCounter from './CurrentVisitorCounter';

function HighscoreList(props){
  console.log('render',props);
  return (
    <div>
      <Menu />
      <div className="container">  
        <h1>Highscore</h1>
        <p>{props.stats}</p>
        <CurrentVisitorCounter />
      </div>
    </div>
  );
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
