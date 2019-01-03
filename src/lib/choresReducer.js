import superagent from 'superagent';
import uuid from 'uuid/v4';
const url = 'http://localhost:3019/api/v1/chores';
// Actions
export const CHORE_ADD = 'chore/ADD';

// Reducer
let initialState = [];
export default function choreReducer(state = initialState, action) {
    let {type,payload} = action;
    switch (type) {
        case CHORE_ADD:
        localStorage.setItem('state', 'state');
            return [...state, payload];
        default: return state;
    }
}

// Action Creators
// export function ActionCreator() {
    
// }
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