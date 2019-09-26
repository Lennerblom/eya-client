import superagent from 'superagent';
import uuid from 'uuid/v4';
const url = 'https://localhost:3019/api/v1/chores';
// Actions
export const CHORE_ADD = 'chore/ADD';
export const CHORE_ASYNC_ADD = 'chore/ASYNC_ADD';
export const CHORE_FETCH = 'chore/FETCH';
export const CHORE_FETCH_ONE = 'chore/FETCH_ONE';
export const CHORE_UPDATE = 'chore/UPDATE';
export const CHORE_DELETE = 'chore/DELETE';

// Reducer
let initialState = [];
const choresReducer = (state = initialState, action) => {
  let {type, payload} = action;
  switch (type) {
  case CHORE_ADD:
    localStorage.setItem('state', 'state');
    return [...state, payload];
  case CHORE_FETCH:
    return [...state, payload];
  case CHORE_ASYNC_ADD:
    return [...state, ...payload];
  case CHORE_UPDATE:  
    return state.map(chore => chore.id === payload.id ? payload : chore);
  case CHORE_DELETE: 
    return state.filter(chore => chore.id !== payload.id);
  default: return state;
  }
};

// Action Creators
export const choreAdd = (chore) => {
  console.log('addReducer', chore);
  chore.id = uuid();
  return dispatch => {
    superagent.post(url, chore)
      .then(res => {
        dispatch({type: CHORE_ADD, payload: res.body});
      });
  };
};

export const choreAsyncAdd = (chore) => {
  console.log('inside action creator', chore);
  return {
    type: CHORE_ASYNC_ADD,
    payload: chore,
  };
};
export const choreFetch = () => {
  return dispatch => {
    fetch(url)
      .then(function(res) { 
        return res.json();
      })
      .then((chore) => {
        console.log('fetch data: ', chore);
        dispatch({
          type: CHORE_FETCH,
          payload: chore,
        });
      });
  };
};

export const choreFetchOne = (chore) => {
  return dispatch => {
    fetch(`${url}/${chore._id}`)
      .then(function(res) { 
        return res.json();
      })
      .then((chore) => {
        console.log('fetch data: ', chore);
        dispatch({
          type: CHORE_FETCH_ONE,
          payload: chore,
        });
      });
  };
};

export const choreUpdate = (chore) => {
  return dispatch => {
    superagent.put(`${url}/${chore._id}`)
      .send(chore)
      .then(() => {
        dispatch({ 
          type: CHORE_UPDATE,
          payload: chore,
        });
      });
  };
   
};
export const choreDelete = (chore) => {
  return dispatch => {
    superagent.delete(`${url}/${chore._id}`)
      .then(res => {
        return res.text;
      })
      .then(() => {
        dispatch(
          {type: CHORE_DELETE,
            payload: chore,
          });
      });
  };
};

export default choresReducer;