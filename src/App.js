import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {HashRouter, Route, Switch} from 'react-router-dom';
import createStore from './lib/store.js';
import Dashboard from './components/dashboard.js';
import Landing from './components/landing.js';
import ChoreDetails from './components/choreDetails';
import './App.css';
import '../src/styles/global.scss';

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
                  <Route exact path="/details" component={ChoreDetails}/>
                </Switch>
            </HashRouter>
          </Provider>
        </div>
    );
}
}