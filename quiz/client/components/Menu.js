"use strict";
import React from 'react';
import {connect} from 'react-redux';
import constants from '../store/constants';
import store from '../store/index';

function Menu(props){
  console.log('render',props);
  return (
    <div>
      <a href="">Quiz</a>
      <a href="">Highscore</a>
      <a href="">Kontakt</a>
      <a href="">Om</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
