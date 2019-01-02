import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {HashRouter, Route, Switch} from 'react-router-dom';
import createStore from './lib/store.js';
import Dashboard from './components/dashboard.js';
import Landing from './components/landing.js';
import './App.css';

const store = createStore();
export default class App extends Component {
  render() {

    return(
        <div>
          <Provider store={store}>
            <HashRouter>
                <Switch>
                  <Route exact path="/home" component={Dashboard}/>
                  <Route exact path="/" component={Landing}/>
                </Switch>
            </HashRouter>
          </Provider>
        </div>
    );
}
}