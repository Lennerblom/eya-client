import superagent from 'superagent';
import uuid from 'uuid/v4';
const url = 'abc'
// Actions
export const CHORES_ADD = 'chores/ADD';

// Reducer
let initialState = [];
export default function choreReducer(state = initialState, action) {
    let {type,payload} = action;
    switch (type) {
        case CHORES_ADD:
        localStorage.setItem('state', 'state');
            return [...state, payload];
        default: return state;
    }
}

// Action Creators
// export function ActionCreator() {
    
// }
export const choresAdd = (chores) => {
    console.log('addReducer', chores);
    chores.id = uuid();
    return dispatch => {
      superagent.post(url, chores)
        .then(res => {
          dispatch({type: CHORES_ADD, payload: res.body});
        });
    };
  };