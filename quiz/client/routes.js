import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import HighscoreList from './components/HighscoreList';
import Clock from './components/Clock';
import store from './store/';
import {Provider} from 'react-redux';
export const Routes = () => (
  <Provider store={store}>
  <Switch>
    <Route exact path='/' component={App} />
    <Route exact path='/kontakt' component={HighscoreList} />
  </Switch>
</Provider>
);
export default Routes;
