import { Provider } from 'react-redux';
import {store, persistor} from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import ContactBooks from './components/ContactBooks/ContactBooks';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <ContactBooks />
      </PersistGate>
    </Provider>
  );
};
