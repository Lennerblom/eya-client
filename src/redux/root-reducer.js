import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
//import choreReducer from './chore/chore.reducer';
import choresReducer from '../lib/choresReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['chore']
}

const rootReducer = combineReducers({
  user: userReducer,
  chore: choresReducer
});

export default persistReducer(persistConfig, rootReducer);