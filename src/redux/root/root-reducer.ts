/*
 * File: root-reducer.ts
 * File Created: Saturday, 2nd January 2021 9:29:08 pm
 * -----
 * Last Modified: Tuesday, 5th January 2021 12:26:41 am
 * -----
 * Description:
 */

import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//REDUX PERSIS CONFIG

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [''],
};

const appReducer = combineReducers({});

const rootReducer = (state: any, action: any) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === 'LOG_OUT') {
    state = undefined;
    storage.removeItem('persist:root');
  }

  return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
