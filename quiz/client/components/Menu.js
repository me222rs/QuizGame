"use strict";
import React from 'react';
import {connect} from 'react-redux';
import constants from '../store/constants';
import store from '../store/index';
import { Link } from 'react-router-dom'

function Menu(props){
  console.log('render',props);
  return (
    <nav class="navbar navbar-default">
      <div>
        <ul class="nav navbar-nav">
          <li><Link to="/">Hem</Link></li>
          <li><Link to="/highscore">Highscore</Link></li>
        </ul>
      </div>
    </nav>
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
