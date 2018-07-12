"use strict";
import { currentVisitors } from '../api';
import React, { Component } from 'react';

class CurrentVisitorCounter extends Component {

  constructor(props) {
    super(props);
    currentVisitors((err, visitors) => this.setState({
      visitors
    }));

    this.state = {
      visitors: 0
    };
  }

  render() {
    return (
      <div className="navbar navbar-default navbar-fixed-bottom">
        <p>
          Besökare just nu: {this.state.visitors}
        </p>
      </div>
    );
  }
}

export default CurrentVisitorCounter;
