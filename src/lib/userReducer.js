// Actions
const USER_ADD = 'Resource/USER_ADD';

// Reducer
export default function reducer(state = {}, action) {
    switch (action.type) {
        case USER_ADD:
            return {
                ...state,
                ...action.payload
            };
        default: return state;
    }
}

// Action Creators
export function ActionCreator() {
    
}