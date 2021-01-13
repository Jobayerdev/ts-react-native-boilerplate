/*
 * File: home.page.component.tsx
 * File Created: Saturday, 2nd January 2021 9:29:08 pm
 * -----
 * Last Modified: Wednesday, 13th January 2021 11:42:20 pm
 * -----
 * Description:
 */

import {Divider} from '@ui-kitten/components';
import LandingTopAction from '../components/landing-top-action/landing-top-actions.component';
import React from 'react';

interface IFProps {
  navigation?: any;
}

const LandingPage: React.FC<IFProps> = ({navigation}) => {
  return (
    <>
      <LandingTopAction />
      <Divider />
    </>
  );
};

export default LandingPage;
