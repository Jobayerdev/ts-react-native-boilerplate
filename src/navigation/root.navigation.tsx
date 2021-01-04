/*
 * File: root.navigation.ts
 * File Created: Saturday, 2nd January 2021 11:34:51 pm
 * -----
 * Last Modified: Sunday, 3rd January 2021 11:49:01 pm
 * -----
 * Description:
 */

import DetailsPage from '../pages/details/details.page.component';
import LandingPage from '../pages/landing/landing.page.component';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

const RootNavigator = () => (
  <NavigationContainer>
    <Navigator headerMode="none">
      <Screen name="Home" component={LandingPage} />
      <Screen name="Details" component={DetailsPage} />
    </Navigator>
  </NavigationContainer>
);

export default RootNavigator;
