import choreActionTypes from './chore.types';
import { addChoreToApp, removeChoreFromApp } from './chore.util';
import { choreAdd, choreFetch } from './chore.actions';

const INITIAL_STATE = {
    chore: []
}

const choreReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case choreActionTypes.ADD_CHORE:
      return {         
        ...state,
        chore: choreAdd(state.chore, action.payload)
      }
    case choreActionTypes.REMOVE_CHORE:
      return {
        ...state,
        chore: removeChoreFromApp(state.chore, action.payload)
      }
    case choreActionTypes.CHORE_FETCH:
      return {
        ...state,
        chore: choreFetch(state.chore, action.payload)
      }
      default: return state
  }
  
}


// import CHORE_DATA from '../chore-data/chore.data';

// const INITIAL_STATE = {
//   collections: CHORE_DATA
// };

// const choreReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//       default: 
//         return state
//   }
// };

export default choreReducer;