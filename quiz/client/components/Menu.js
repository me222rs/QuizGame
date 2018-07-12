"use strict";
import React from 'react';
import {connect} from 'react-redux';
import constants from '../store/constants';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {getStatisticsFromDB} from '../api';

function Menu(props){
  console.log('render',props);
  return (
    <nav className="navbar navbar-default">
      <div>
        <ul className="nav navbar-nav">
          <li><Link to="/">Hem</Link></li>
          <li onClick={props.getStats}><Link to="/highscore">Highscore</Link></li>
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
    getStats: (evt) => {
      axios.get("http://localhost:8000/getStatistics")
        .then((response) => {
          dispatch({ type: constants.GET_STATS, data: response.data })
        }).catch((err) => {
          dispatch({type: Actions.FETCH_DATA_ERROR, payload: err})
        })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
