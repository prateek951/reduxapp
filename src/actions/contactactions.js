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

export const getContact = id => async dispatch => {
  const pr = await Axios.get('https://jsonplaceholder.typicode.com/users/'+id);
  const contact = pr.data;
  dispatch({ type: types.GET_CONTACT,payload: contact});
};

export const addContact = contact => async dispatch => {
  const pr = await Axios.post(
    "https://jsonplaceholder.typicode.com/users",
    contact
  );
  dispatch({
    type: types.ADD_CONTACT,
    payload: pr.data
  });
};

export const deleteContact = id => async dispatch => {
  try {
    await Axios.delete("https://jsonplaceholder.typicode.com/users/" + id);
    dispatch({
      type: types.DELETE_CONTACT,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: types.DELETE_CONTACT,
      payload: id
    });
  }
};
