/*
 * File: home.page.component.tsx
 * File Created: Saturday, 2nd January 2021 9:29:08 pm
 * -----
 * Last Modified: Friday, 8th January 2021 11:06:00 pm
 * -----
 * Description:
 */

import React from 'react';
import {Text} from 'react-native';

interface IFProps {
  navigation?: any;
}

const LandingPage: React.FC<IFProps> = ({navigation}) => {
  return (
    <>
      <Text>Hello</Text>
    </>
  );
};

export default LandingPage;
