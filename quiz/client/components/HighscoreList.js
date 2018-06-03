"use strict";
import React from 'react';
import {connect} from 'react-redux';
import constants from '../store/constants';
import store from '../store/index';

function HighscoreList(props){
  console.log('render',props);
  return (
    <div>
      <h1>Highscore</h1>
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
