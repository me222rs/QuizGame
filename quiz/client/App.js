"use strict";
import React, { Component } from 'react';
import store from './store/';
import {Provider} from 'react-redux';
import Start from './components/StartMenu';
import Score from './components/Score';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Provider store={store}>
          <div>
            <Start />
            <Score />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
