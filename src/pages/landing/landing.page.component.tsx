/*
 * File: home.page.component.tsx
 * File Created: Saturday, 2nd January 2021 9:29:08 pm
 * -----
 * Last Modified: Tuesday, 5th January 2021 1:10:34 am
 * -----
 * Description:
 */

import {Divider} from '@ui-kitten/components';
import LandingPopularCategories from '../../components/module/landing/landing-popular-categories/landing-popular-categories.component';
import LandingTopAction from '../../components/module/landing/landing-top-action/landing-top-actions.component';
import React from 'react';

interface IFProps {
  navigation?: any;
}

const LandingPage: React.FC<IFProps> = ({navigation}) => {
  return (
    <>
      <LandingTopAction />
      <Divider />
      <LandingPopularCategories />
    </>
  );
};

export default LandingPage;
