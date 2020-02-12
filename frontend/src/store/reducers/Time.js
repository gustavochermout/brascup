const INITIAL_STATE = {
    times: []
};

export default function Time(state = INITIAL_STATE, action) {
    if (action.type === "SET_TIMES") {
        return { ...state, times: action.times };
    }
    
    return state;
}