"use strict";
import React from 'react';
import {connect} from 'react-redux';
import Menu from './Menu';

function HighscoreList(props){
  console.log('render',props);
  return (
    <div>
      <Menu />
      <h1>Highscore</h1>
      <p>Test1 - 60 poäng</p>
      <p>Test2 - 45 poäng</p>
      <p>Test3 - 35 poäng</p>
    </div>
  );
}

function mapStateToProps(state){
  return {

  };
}

function mapDispatchToProps(dispatch){
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HighscoreList);
