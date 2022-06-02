import { ADD_CONTACT, DELETE_CONTACT } from './types';
import { nanoid } from 'nanoid';

const addContact = payload => {
  return { type: ADD_CONTACT, payload };
};

const deleteContact = payload => {
  return {
    type: DELETE_CONTACT,
    payload: { ...payload, id: nanoid() },
  };
};

const actionCreators = {
  addContact,
  deleteContact,
};

export default actionCreators;
