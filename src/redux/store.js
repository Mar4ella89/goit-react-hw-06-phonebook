import { configureStore } from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';

import contactsReducer from './contacts/contacts-reducer';
import filterReducer from './filter/filter-reducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;
