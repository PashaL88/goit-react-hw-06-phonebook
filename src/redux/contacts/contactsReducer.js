import { ADD_CONTACT, DELETE_CONTACT } from './types';

const contactsReducer = (store = [], action) => {
  switch (action.type) {
    case ADD_CONTACT:
      const newStore = [...store, action.payload];
      return newStore;
    case DELETE_CONTACT:
      return store.filter(item => item.id !== action.payload);
    default:
      return store;
  }
};

export default contactsReducer;
