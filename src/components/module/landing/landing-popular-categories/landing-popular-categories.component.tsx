/*
 * File: landing-popular-categories.component.tsx
 * File Created: Sunday, 3rd January 2021 11:53:16 pm
 * -----
 * Last Modified: Tuesday, 5th January 2021 1:37:38 am
 * -----
 * Description:
 */

import React from 'react';
import {Text} from 'react-native';
import {tailwind} from '../../../../../tailwind';

const LandingPopularCategories = () => {
  return (
    <>
      <Text style={tailwind('p-3 text-blue-800 font-semibold bg-blue-200')}>
        Popular Categories
      </Text>
    </>
  );
};

export default LandingPopularCategories;
