import { ADD_CONTACT, DELETE_CONTACT } from './contactsTypes';
import { nanoid } from 'nanoid';

const addContact = payload => {
  return { type: ADD_CONTACT, payload: { ...payload, id: nanoid() } };
};

const deleteContact = payload => {
  return {
    type: DELETE_CONTACT,
    payload,
  };
};

const actionCreators = {
  addContact,
  deleteContact,
};

export default actionCreators;

// import { createAction } from '@reduxjs/toolkit';

// export const addContact = createAction('contacts/add');
// export const deleteContact = createAction('contacts/delete');

// const actions = {
//   addContact,
//   deleteContact,
// };

// export default actions;
