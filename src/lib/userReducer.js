import uuid from 'uuid/v4';
import superagent from 'superagent';
const url =  'http://localhost:3019/api/v1/user';
// Actions
export const USER_ADD = 'user/ADD';
export const USER_ASYNC_ADD = 'user/ASYNC_ADD';
export const USER_FETCH = 'user/FETCH';
export const USER_UPDATE = 'user/UPDATE';
export const USER_DELETE = 'user/DELETE';

// Reducer
let initialState = [];
export default (state = initialState, action) => {
  let {type, payload} = action;
  switch (type) {
  case USER_ADD:
    localStorage.setItem('state', 'state');
    return [...state, payload];
  case USER_FETCH:
    return [...state, payload];
  case USER_ASYNC_ADD:
    return [...state, ...payload];
  case USER_UPDATE:  
    return state.map(user => user.id === payload.id ? payload : user);
  case USER_DELETE: 
    return state.filter(user => user.id !== payload.id);
  default: return state;
  }
};

// Action Creators
export const userAdd = (user) => {
  console.log('addReducer', user);
  user.id = uuid();
  return dispatch => {
    superagent.post(url, user)
      .then(res => {
        dispatch({type: USER_ADD, payload: res.body});
      });
  };
};

export const userAsyncAdd = (user) => {
  console.log('inside action creator', user);
  return {
    type: USER_ASYNC_ADD,
    payload: user,
  };
};
export const userFetch = () => {
  return dispatch => {
    fetch(url)
      .then(function(res) { 
        return res.json();
      })
      .then((user) => {
        console.log('fetch data: ', user);
        dispatch(userAsyncAdd(user));
      });
  };
};

export const userUpdate = (user) => {
  return dispatch => {
    superagent.put(`${url}/${user._id}`)
      .send(user)
      .then(() => {
        dispatch({ 
          type: USER_UPDATE,
          payload: user,
        });
      });
  };
   
};
export const userDelete = (user) => {
  return dispatch => {
    superagent.delete(`${url}/${user._id}`)
      .then(res => {
        return res.text;
      })
      .then(() => {
        dispatch(
          {type: USER_DELETE,
            payload: user,
          });
      });
  };
};