/*
 * File: index.js
 * File Created: Saturday, 2nd January 2021 9:29:08 pm
 * -----
 * Last Modified: Friday, 8th January 2021 11:09:48 pm
 * -----
 * Description:
 */

/**
 * @format
 */

import App from './App';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
