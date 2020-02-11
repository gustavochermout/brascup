import { createStore } from 'redux';

const INITIAL_STATE = {
    times: []
};

function reducer(state = INITIAL_STATE, action) {
    if (action.type === "SET_TIMES") {
        return { ...state, times: action.times };
    }
    
    return state;
}

const store = createStore(reducer);

export default store;