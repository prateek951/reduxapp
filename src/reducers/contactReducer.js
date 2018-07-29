import { types } from "../actions/actiontypes";

const initialState = {
  contacts: []
};

/**
 * @param {Object} state - Default application state
 * @param {Object} action - Action from action creator
 * @returns {Object} New state
 */

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_CONTACTS:
      return { ...state, contacts: action.payload };
    case types.ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };

    case types.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
}
