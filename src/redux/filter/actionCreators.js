import { FILTER_CONTACT } from './types';
import { nanoid } from 'nanoid';

const filterContacts = payload => {
  return {
    types: FILTER_CONTACT,
    payload: nanoid(),
  };
};

export default filterContacts;
