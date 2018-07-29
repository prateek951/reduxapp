const initialState = {

}

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/

export default function(state = initialState, action) {
  switch (action.type) {
    case '': 
        return { ...state};
    default:
        return state;
}
}
