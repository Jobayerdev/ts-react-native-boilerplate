/*
 * File: App.tsx
 * File Created: Saturday, 2nd January 2021 9:29:08 pm
 * -----
 * Last Modified: Tuesday, 5th January 2021 12:46:32 am
 * -----
 * Description:
 */

import {persistor, store} from './src/redux/root/store';

import AppProvider from './src/provider/app.provider';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import React from 'react';
import RootNavigator from './src/navigation/root.navigation';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppProvider>
          <RootNavigator />
        </AppProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
