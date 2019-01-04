import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import choresReducer from './choresReducer';
import userReducer from './userReducer';

const appReducer = combineReducers({chore: choresReducer, user: userReducer});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => createStore(appReducer, composeEnhancers(applyMiddleware(thunk)));
