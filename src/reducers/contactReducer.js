import { types } from "../actions/actiontypes";

const initialState = {
  contacts: [
    {
      name: "Prateek",
      email: "prince.cenation@gmail.com",
      phone: "112-232-324-121"
    }
  ]
};

/**
 * @param {Object} state - Default application state
 * @param {Object} action - Action from action creator
 * @returns {Object} New state
 */

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_CONTACTS:
      return { ...state };
    default:
      return state;
  }
}
