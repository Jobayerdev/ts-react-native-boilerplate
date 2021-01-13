/*
 * File: App.tsx
 * File Created: Saturday, 2nd January 2021 9:29:08 pm
 * -----
 * Last Modified: Wednesday, 13th January 2021 11:39:56 pm
 * -----
 * Description:
 */

import {persistor, store} from './src/@config/redux/store';

import AppProvider from './src/@container/theme/app.provider';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import React from 'react';
import RootNavigator from './src/@container/navigation/root.navigation';

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
