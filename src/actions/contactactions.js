
// These are all the action creators that returns an action 

import { types } from "./actiontypes";

export const getContacts = () => {
    return {
        type: types.GET_CONTACTS
    }
};

export const addContact = contact => {
    return {
        type : types.ADD_CONTACT,
        payload: contact
    }
}

export const deleteContact = id => {
    return {
        type: types.DELETE_CONTACT,
        payload : id
    }
}