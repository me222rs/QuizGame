"use strict";
import React from 'react';
import {connect} from 'react-redux';
import constants from '../store/constants';
import store from '../store/index';
import { Link } from 'react-router-dom'

function Menu(props){
  console.log('render',props);
  return (
    <div>
      <Link to="/">Hem</Link>
      <Link to="/highscore">Highscore</Link>
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
