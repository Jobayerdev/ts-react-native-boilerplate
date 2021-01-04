/*
 * File: store.ts
 * File Created: Saturday, 2nd January 2021 9:29:08 pm
 * -----
 * Last Modified: Tuesday, 5th January 2021 12:34:42 am
 * -----
 * Description:
 */

import {applyMiddleware, createStore} from 'redux';

import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';

const middleware = [thunk];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger as any);
}

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export const persistor = persistStore(store);
