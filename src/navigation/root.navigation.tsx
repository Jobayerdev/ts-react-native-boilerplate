/*
 * File: root.navigation.ts
 * File Created: Saturday, 2nd January 2021 11:34:51 pm
 * -----
 * Last Modified: Tuesday, 5th January 2021 12:40:22 am
 * -----
 * Description:
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

const RootNavigator = () => (
  <NavigationContainer>
    <Navigator headerMode="none">
      {/* Do some pages */}
      {/* <Screen name="Details" component={XXXXXXXXXXXXXXX} /> */}
    </Navigator>
  </NavigationContainer>
);

export default RootNavigator;
