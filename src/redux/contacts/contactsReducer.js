import { addContact, deleteContact } from './contactsActions';
import { createReducer } from '@reduxjs/toolkit';

const contactsReducer = createReducer([], {
  [addContact]: (store, { payload }) => [...store, payload],
  [deleteContact]: (store, { payload }) =>
    store.filter(item => item.id !== payload),
});

export default contactsReducer;

// import { ADD_CONTACT, DELETE_CONTACT } from './contactsTypes';

// const contactsReducer = (store = [], action) => {
//   switch (action.type) {
//     case ADD_CONTACT:
//       const newStore = [...store, action.payload];
//       return newStore;
//     case DELETE_CONTACT:
//       return store.filter(item => item.id !== action.payload);
//     default:
//       return store;
//   }
// };

// export default contactsReducer;
