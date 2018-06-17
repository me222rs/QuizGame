"use strict";
import React, { Component } from 'react';
import store from './store/';
import {Provider} from 'react-redux';
import Score from './components/Score';
import Menu from './components/Menu';
import QuizForm from './components/QuizForm';
import StartMenu from './components/StartMenu';
import CurrentVisitorCounter from './components/CurrentVisitorCounter';

class App extends Component {

  render() {
    return (
        <div className="App">
          <Provider store={store}>
            <div>
              <Menu />
              <StartMenu />
              <CurrentVisitorCounter />
            </div>
          </Provider>
        </div>
    );
  }
}

export default App;
