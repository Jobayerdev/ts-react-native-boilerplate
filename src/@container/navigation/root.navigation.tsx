/*
 * File: root.navigation.ts
 * File Created: Saturday, 2nd January 2021 11:34:51 pm
 * -----
 * Last Modified: Wednesday, 13th January 2021 11:40:51 pm
 * -----
 * Description:
 */

import LandingPage from '../../@module/landing/screens/landing.page.component';
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
