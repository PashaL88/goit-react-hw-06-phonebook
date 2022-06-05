import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './contacts/contactsReducer';

const store = configureStore({
  reducer: contactsReducer,
});

export default store;

// import { createStore } from 'redux';
// import reducer from './contacts/contactsReducer';

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;
