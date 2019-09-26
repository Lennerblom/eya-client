import choreActionTypes from './chore.types';
import superagent from 'superagent';
import uuid from 'uuid/v4';
const url = 'http://localhost:3019/api/v1/chores';



export const addChore = chore => ({
  type: choreActionTypes.ADD_CHORE,
  payload: chore
});

export const removeChore = chore => ({
  type: choreActionTypes.REMOVE_CHORE,
  payload: chore
});

export const choreFetch = () => {
  return dispatch => {
    fetch(url)
      .then(function(res) { 
        return res.json();
      })
      .then((chore) => {
        console.log('fetch data: ', chore);
        dispatch({
          type: choreActionTypes.CHORE_FETCH,
          payload: chore,
        });
      });
  };
};

export const choreAdd = (chore) => {
  console.log('addReducer', chore);
  chore.id = uuid();
  return dispatch => {
    superagent.post(url, chore)
      .then(res => {
        dispatch({type: choreActionTypes.ADD_CHORE, payload: res.body});
      });
  };
};
