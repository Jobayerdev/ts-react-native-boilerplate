/*
 * File: details.page.component.tsx
 * File Created: Saturday, 2nd January 2021 11:53:44 pm
 * -----
 * Last Modified: Sunday, 3rd January 2021 8:35:03 pm
 * -----
 * Description:
 */

import {Icon, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import {StyleSheet, Text, View} from 'react-native';

import React from 'react';

//!Icons
const BackIcon = (props: any) => {
  return <Icon {...props} name="arrow-back" />;
};

interface IFProps {
  navigation?: any;
}
const DetailsPage: React.FC<IFProps> = ({navigation}) => {
  const navigateBack = () => {
    return navigation.goBack();
  };
  const BackAction = () => {
    return <TopNavigationAction icon={BackIcon} onPress={navigateBack} />;
  };

  return (
    <View>
      <TopNavigation
        title="Details"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Text>Details</Text>
    </View>
  );
};

export default DetailsPage;
