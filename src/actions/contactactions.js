// These are all the action creators that returns an action

import { types } from "./actiontypes";
import Axios from "axios";

export const getContacts = () => async dispatch => {
  //async call to get the list of all the contacts
  const pr = await Axios.get("https://jsonplaceholder.typicode.com/users");
  const contacts = pr.data;
  dispatch({
    type: types.GET_CONTACTS,
    payload: contacts
  });
};

export const addContact = contact => {
  return {
    type: types.ADD_CONTACT,
    payload: contact
  };
};

export const deleteContact = id => {
  return {
    type: types.DELETE_CONTACT,
    payload: id
  };
};
