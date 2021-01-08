/*
 * File: root.navigation.ts
 * File Created: Saturday, 2nd January 2021 11:34:51 pm
 * -----
 * Last Modified: Friday, 8th January 2021 11:08:49 pm
 * -----
 * Description:
 */

import LandingPage from '../pages/home/home.page.component';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

const RootNavigator = () => (
  <NavigationContainer>
    <Navigator headerMode="none">
      <Screen name="Home" component={LandingPage} />
    </Navigator>
  </NavigationContainer>
);

export default RootNavigator;
