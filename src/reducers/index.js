// This all can be viewed in the Redux Dev
// Tools under the Redux Devtools Extension

import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

export default combineReducers({
  contact: contactReducer
  // this.props.contact
});
