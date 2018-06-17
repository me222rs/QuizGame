"use strict";
import { subscribeToTimer } from '../api';
import React, { Component } from 'react';

class Clock extends Component {

  constructor(props) {
    super(props);
    subscribeToTimer((err, timestamp) => this.setState({
      timestamp
    }));
    state = {
      timestamp: 'no timestamp yet'
    };
  }

  render() {
    return (
      <div className="Time">
        <p>
          Klocka: {this.state.timestamp}
        </p>
      </div>
    );
  }
}

export default Clock;
