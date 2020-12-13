import {StyleSheet, Text, View} from 'react-native';

import React from 'react';

interface IFProps {
  title: string;
  size: 'md' | 'sm';
}
const CustomTitle: React.FC<IFProps> = ({title, size}) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default CustomTitle;

const styles = StyleSheet.create({});
