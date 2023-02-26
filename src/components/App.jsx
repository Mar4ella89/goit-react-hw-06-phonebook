import { Provider } from 'react-redux';
import store from 'redux/store';

import ContactBooks from './ContactBooks/ContactBooks';

export const App = () => {
  return (
    <Provider store={store}>
      <ContactBooks />
    </Provider>
  );
};
