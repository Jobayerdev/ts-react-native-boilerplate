/*
 * File: App.tsx
 * File Created: Saturday, 2nd January 2021 9:29:08 pm
 * -----
 * Last Modified: Friday, 8th January 2021 11:12:46 pm
 * -----
 * Description:
 */

import {persistor, store} from './src/redux/root/store';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import React from 'react';
import RootNavigator from './src/navigation/root.navigation';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
